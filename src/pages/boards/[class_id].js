import { useRouter } from 'next/router';
import BoardButton from '@/components/BoardButton';
import { Inter } from "next/font/google";
import { Grid2, Typography, Stack, Button } from "@mui/material";
import { fontSize } from '@mui/system';
import LinkPath from '@/components/LinkPath';

const inter = Inter({ subsets: ["latin"] });
const API_URL = process.env.PUBLIC_API_URL;

export async function getServerSideProps(context) {
    const {class_id} = context.params;
    const {subject_id} = context.query;
    const {class_name, subject_name} = context.query;
    const No_Of_Links = 2;

    try {
        const response = await fetch(`${API_URL}boards/${class_id}/${subject_id}`);
        
        if (!response.ok) {
          // Handle non-2xx responses
          throw new Error('Failed to fetch subject data');
        }
        
        const { success, boards } = await response.json();
    
        if (success == 0) {
          // Handle case where the response indicates failure
          throw new Error('API did not return success');
        }
        
    
        return {
          props: {
            boards, // Pass the fetched subject data as props
            //subjectArray, // Pass the subjectArray for initial rendering
            class_id, class_name, subject_id, subject_name, No_Of_Links
            
          },
        };
      } catch (error) {
        // Handle the error here, maybe log it or show an error message
        console.error('Error fetching subject data:', error);
    
        return {
          notFound: true, // This will return a 404 page
        };
      }
    
    
}

const BoardPage = ({ boards, class_id, class_name, subject_id, subject_name, No_Of_Links }) => {
    const router = useRouter();
    //const {id/*, class_name, subject_id, subject_name*/} = router.query;
console.log(boards);
console.log(subject_id);

const onClickBoards = (board_id, board_name) => {
  console.log(board_name);
router.push(`/years/${class_id}?class_name=${class_name}&subject_id=${subject_id}&subject_name=${subject_name}&board_id=${board_id}&board_name=${board_name}`)
}


    return (
        <main className={`flex min-h-screen flex-col  ${inter.className}`}>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <Grid2 container spacing={4}>
          <Grid2 item style={{ display: 'flex', justifyContent: 'center' }}
          xs={12}  // Full width on extra-small screens
          sm={6}   // Two columns on small screens
          md={4}   // Three columns on medium screens
          lg={3}   // Four columns on large screens
          xl={2}   >
            <Stack variant='contained' sx={{ borderTopLeftRadius: 50, borderBottomRightRadius: 50, 
              height: 90, width: 250, backgroundColor: '#01411C', alignItems: 'center', justifyContent: 'center' }}>
              <Typography fontSize={30} color='#fff' textAlign={'center'} justifyItems={'center'} fontWeight={'bold'}>
                BOARDS
              </Typography>
            </Stack>
          </Grid2>
        </Grid2>
      </div>
      
<div style={{ display: 'flex', justifyContent: 'left' }}>
        <Grid2 container spacing={4} sx={{ marginTop: 5, marginLeft: 0 }}>
          {
            boards.map((board) => (
              <Grid2 item key={board.board_id}
              xs={12}  // Full width on extra-small screens
      sm={6}   // Two columns on small screens
      md={4}   // Three columns on medium screens
      lg={3}   // Four columns on large screens
      xl={2}   // More columns on extra-large screens
      >
                <div style={{ width: '100%', height: 60, backgroundColor: '#01411C', justifyContent: 'center' }}>
                
                <BoardButton text={board.board_name} onClick={() => onClickBoards(board.board_id, board.board_name)}
                iconName= {board.icon_name} 
                  />

                
                  
                </div>
              </Grid2>
            ))
          }
        </Grid2>
      </div>
        </main>
    );
};

export default BoardPage;


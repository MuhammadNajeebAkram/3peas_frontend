import { useRouter } from 'next/router';
import { Inter } from "next/font/google";
import { Grid2, Button } from "@mui/material";
import { Box } from '@mui/system';

import Image from 'next/image';

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
      <>
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9476597782320237"
     crossorigin="anonymous"></script>
      </head>
        <main className={`flex min-h-screen flex-col  ${inter.className}`}>
          
          
      
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
                <div style={{ width: '100%', height: 60, backgroundColor: '#fff', justifyContent: 'center' }}>
                                
                <Button sx={{textTransform: 'none', color: '#01411C', fontWeight: 'bold', fontSize: 20}}
                onClick={() => onClickBoards(board.board_id, board.board_name)}>
                  <Box sx={{display: 'flex'}}>
                    <Image
                    src= {`/Icons/boards/${board.icon_name}`} // Replace with your actual path
                    alt={``}
                    width={50}  // Adjust the width as needed
                    height={50} // Adjust the height as needed
                    style={{ justifyContent: 'flex-start' }} />

                  </Box>
                  <Box style={{display: 'flex', justifyContent: 'flex-end'}}>
                    {board.board_name}
                  </Box>
                </Button>
                
                  
                </div>
              </Grid2>
            ))
          }
        </Grid2>
      </div>
        </main>
        </>
    );
};

export default BoardPage;


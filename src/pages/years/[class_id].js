// Years Page
import { useRouter } from 'next/router';
import { Inter } from "next/font/google";
import LinkPath from '@/components/LinkPath';
import { Grid2, Button, Stack, Typography } from '@mui/material';

const inter = Inter({ subsets: ["latin"] });
const API_URL = process.env.PUBLIC_API_URL;

export async function getServerSideProps(context) {
    const {class_id} = context.params;
    const {class_name, subject_id, subject_name, board_id, board_name} = context.query;
    const No_Of_Links = 3;

    try {
        const response = await fetch(`${API_URL}years/${class_id}/${subject_id}/${board_id}`);
        
        if (!response.ok) {
          // Handle non-2xx responses
          throw new Error('Failed to fetch subject data');
        }
        
        const { success, years } = await response.json();
    
        if (success == 0) {
          // Handle case where the response indicates failure
          throw new Error('API did not return success');
        }
        
    
        return {
          props: {
            years, // Pass the fetched subject data as props
            //subjectArray, // Pass the subjectArray for initial rendering
            class_id, class_name, subject_id, subject_name, board_id, board_name, No_Of_Links
            
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

const YearPage = ({years, class_id, class_name, subject_id, subject_name, board_id, board_name, No_Of_Links}) => {
    const router = useRouter();
    //const {id, class_name, subject_id, subject_name, board_id, board_name} = router.query;
console.log(years);

const onClickYears = (year) => {
    router.push(`/papers/${class_id}?class_name=${class_name}&subject_id=${subject_id}&subject_name=${subject_name}&board_id=${board_id}&board_name=${board_name}&year=${year}`)
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
            years.map((year) => (
              <Grid2 item key={year.year}
              xs={12}  // Full width on extra-small screens
      sm={6}   // Two columns on small screens
      md={4}   // Three columns on medium screens
      lg={3}   // Four columns on large screens
      xl={2}   >
                <div style={{ display: 'flex', width: '100%', height: 50, backgroundColor: '#fff', justifyContent: 'center' }}>
                
                <Button onClick={() => onClickYears(year.year)} sx={{fontSize: 20, fontWeight: 'bold', 
                    justifyContent: 'center', textAlign: 'center', color: '#01411C'
                }}
                 
                  >
                    {year.year}
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
}

export default YearPage;
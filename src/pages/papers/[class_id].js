import { useRouter } from 'next/router';
import { Inter } from "next/font/google";

import { Grid2 } from '@mui/material';
import Image from 'next/image';
import { useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });
const API_URL = process.env.PUBLIC_API_URL;
const AWS_Paper = 'https://pakistanpastpapers.s3.ap-southeast-1.amazonaws.com/';

export async function getServerSideProps(context) {
    const {class_id} = context.params;
    
    const {class_name, subject_id, subject_name, board_id, board_name, year} = context.query;
    const No_Of_Links = 4;

    try {
        const response = await fetch(`${API_URL}papers/${class_id}/${subject_id}/${board_id}/${year}`);
        
        if (!response.ok) {
          // Handle non-2xx responses
          throw new Error('Failed to fetch subject data');
        }
        
        const { success, papers } = await response.json();
    
        if (success == 0) {
          // Handle case where the response indicates failure
          throw new Error('API did not return success');
        }
        
    
        return {
          props: {
            papers, // Pass the fetched subject data as props
            //subjectArray, // Pass the subjectArray for initial rendering
            class_id, class_name, subject_id, subject_name, board_id, board_name, year, No_Of_Links
            
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
const PaperPage = ({papers, class_id, class_name, subject_id, subject_name, board_id, board_name, year, No_Of_Links}) => {
    const router = useRouter();
    //const {id, class_name, subject_id, subject_name, board_id, board_name, year} = router.query;

console.log(papers);
console.log(AWS_Paper);
useEffect(() => {
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });
}, []);
    return (
<main className={`flex min-h-screen flex-col  ${inter.className}`}>
{/*
  <div style={{ display: 'flex', justifyContent: 'left' }}>
        <LinkPath class_id = {class_id} class_name = {class_name} subject_id = {subject_id} subject_name = {subject_name} board_id = {board_id} board_name = {board_name} year = {year} No_Of_Links = {4} />
        
      </div>
      */}

      
      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <Grid2 container spacing={4} sx={{ marginTop: 10, marginLeft: 0 }}>
          {
            papers.map((paper) => (
              <Grid2 item key={paper.paper_path}>
                <div style={{ justifyContent: 'center' }}>
                
                <Image src={`${AWS_Paper}${paper.paper_path}`} 
                alt={paper.paper_name}
                width={2000}
                height={2000}
                 
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
export default PaperPage;
import { useRouter } from 'next/router';
import { Inter } from "next/font/google";
import { Button, ListItem, Stack, Typography } from "@mui/material";
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid2'

import Image from 'next/image';

//import DOMPurify from 'dompurify';

const inter = Inter({ subsets: ["latin"] });
const API_URL = process.env.PUBLIC_API_URL;
const DOMPurify = typeof window !== 'undefined' ? require('dompurify') : null;

export async function getServerSideProps(context) {
    const {id} = context.params; 

    try {
        const response = await fetch(`${API_URL}get_news_content/${id}`);
        
        if (!response.ok) {
          // Handle non-2xx responses
          throw new Error('Failed to fetch subject data');
        }
        
        const { success, news } = await response.json();
    
        if (success == 0) {
          // Handle case where the response indicates failure
          throw new Error('API did not return success');
        }
        
        
        return {
          props: {
            news, // Pass the fetched subject data as props
            
            //subjectArray, // Pass the subjectArray for initial rendering
            
            
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

const NewsPage = ({news}) => {

    console.log(news);
    //const sanitizedHtml = DOMPurify.sanitize(news[0].content);
    const sanitizedHtml = DOMPurify ? DOMPurify.sanitize(news[0].content) : news[0].content;
    return (
      <>
      <head>
       
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9476597782320237"
     crossorigin="anonymous"></script>
      </head>


        <main className={`flex min-h-screen flex-col  ${inter.className}`}>
 

            <Grid container justifyContent={'center'} spacing={4}>
                <Grid spacing={10} size = {8}>
                    <Grid sx={{marginBottom: 6}}>
                    <Typography sx={{color: '#fff', fontSize: '16pt', fontWeight: 'bold'}}>
                    {news[0].title}
                    </Typography>
                          
                            
                    </Grid>
                          
                        
                   <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} style={{color: '#fff'}} />
                   
                </Grid>

            </Grid>


            </main>
            </>
    )

}

export default NewsPage;
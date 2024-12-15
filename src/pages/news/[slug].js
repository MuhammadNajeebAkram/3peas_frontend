import { useRouter } from 'next/router';
import { Inter } from "next/font/google";
import { Button, Link, ListItem, Stack, Typography } from "@mui/material";
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid2'

import Image from 'next/image';
import Head from 'next/head';

//import DOMPurify from 'dompurify';

const inter = Inter({ subsets: ["latin"] });
const API_URL = process.env.PUBLIC_API_URL;
const DOMPurify = typeof window !== 'undefined' ? require('dompurify') : null;

export async function getServerSideProps(context) {
    const {slug} = context.params; 

    try {
        const response = await fetch(`${API_URL}get_news_content_by_slug/${slug}`);
        
        if (!response.ok) {
          // Handle non-2xx responses
          throw new Error('Failed to fetch subject data');
        }
        
        const { success, news, news_files } = await response.json();
    
        if (success == 0) {
          // Handle case where the response indicates failure
          throw new Error('API did not return success');
        }
        
        
        return {
          props: {
            news, // Pass the fetched subject data as props
            news_files,
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

const NewsPage = ({news, news_files}) => {

    console.log(news_files);
    //const sanitizedHtml = DOMPurify.sanitize(news[0].content);
    const sanitizedHtml = DOMPurify ? DOMPurify.sanitize(news[0].content) : news[0].content;
    return (
      <>
     
<Head>

        <meta name="description" content={news[0].meta_description} />
        
</Head>

        <main className={`flex min-h-screen flex-col  ${inter.className}`}>
 

            <Grid container justifyContent={'center'} spacing={4}>
                <Grid spacing={10} size = {8}>
                    <Grid sx={{marginBottom: 6}}>
                    <Typography className = {news[0].language == 0 ? 'urdu-font-main-title' : 'english-font-main-title'} 
                    sx={{color: '#fff', fontSize: '16pt', fontWeight: 'bold', textAlign: 'center'}}>
                    {news[0].title}
                    </Typography>
                          
                            
                    </Grid>
                          
                        
                   <div className={news[0].language == 0 ? 'urdu-font-main-content' : 'english-font-main-content'} 
                   dangerouslySetInnerHTML={{ __html: sanitizedHtml }}  />
                   <div style={{textAlign: 'right'}}>
                    {
                      news_files?.map((file, index) => (                        
                       
                        <Link key={index} href = {`/files/${file.path}`}                          
                          target="_blank" rel="noopener noreferrer" style={{marginRight: 10}}
                          >
                           Link {index + 1}
                          </Link>

                    ))
                    }
                   </div>
                   
                </Grid>

            </Grid>


            </main>
            </>
    )

}

export default NewsPage;
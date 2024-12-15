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
const AWS_Blog = process.env.AWS_BLOG_BUCKET_URL;

export async function getServerSideProps(context) {
    const {slug} = context.params; 

    try {
        const response = await fetch(`${API_URL}get_blogs_content_by_slug/${slug}`);
        
        if (!response.ok) {
          // Handle non-2xx responses
          throw new Error('Failed to fetch subject data');
        }
        
        const { success, blog, blog_files } = await response.json();
    
        if (success == 0) {
          // Handle case where the response indicates failure
          throw new Error('API did not return success');
        }
        
        
        return {
          props: {
            blog, // Pass the fetched subject data as props
            blog_files,
            AWS_Blog,
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

const BlogPage = ({blog, blog_files, AWS_Blog}) => {

    
    //const sanitizedHtml = DOMPurify.sanitize(news[0].content);
    const sanitizedHtml = DOMPurify ? DOMPurify.sanitize(blog[0].content) : blog[0].content;
    return (
      <>
     
<Head>

        <meta name="description" content={blog[0].meta_description} />
        
</Head>

        <main className={`flex min-h-screen flex-col  ${inter.className}`}>
 

            <Grid container justifyContent={'center'} spacing={4}>
                <Grid spacing={10} size = {8}>
                {
                      blog_files.length > 0 && (
                        <Grid container justifyContent="center" alignItems="center" sx={{marginBottom: 4}}>
                        <Grid item >
                          <Image
                          style={{
                            height: "100%", // Adjust height automatically
                            width: "450px", // Set a specific width
                            maxHeight: '250px',
                            objectFit: "cover",
                            marginRight: "20px", // Add margin for spacing
                        }}
                        src={`${AWS_Blog}${blog_files[0].path}`}
                        alt={blog[0].title}
                        width={400} // Maintain width for responsiveness
                        height={200}
                          
                          >

                          </Image>
                   </Grid>

                        </Grid>
                      )
                    }
                 
                    <Grid sx={{marginBottom: 6}}>
                    <Typography className = {blog[0].language == 0 ? 'urdu-font' : 'english-font'} 
                    sx={{color: '#fff', fontSize: '16pt', fontWeight: 'bold', textAlign: 'center'}}>
                    {blog[0].title}
                    </Typography>
                          
                            
                    </Grid>
                          
                        
                   <div className={blog[0].language == 0 ? 'urdu-font-12' : 'english-font-12'} 
                   dangerouslySetInnerHTML={{ __html: sanitizedHtml }} style={{color: '#fff'}} />
                   
                   
                </Grid>

            </Grid>


            </main>
            </>
    )

}

export default BlogPage;
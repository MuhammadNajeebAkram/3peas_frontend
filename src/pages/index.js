import Image from "next/image";
import { Inter } from "next/font/google";
import { Box } from "@mui/system";
import { Link, ListItem, Stack, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { ArrowRightSharp, ArrowLeftSharp } from '@mui/icons-material';
import { useState } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const API_URL = process.env.PUBLIC_API_URL;

export async function getServerSideProps(context) {
  

  try {
      const response = await fetch(`${API_URL}get_all_active_news_title`);
      
      if (!response.ok) {
        // Handle non-2xx responses
        throw new Error('Failed to fetch news data');
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


export default function Home({news}) {
  console.log(news)

  const [recordsPerPage, setRecordsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1)
  const [slicedNews, setSlicedNews] = useState(news.slice(0, recordsPerPage));

  const Router = useRouter();

  const handleNextPage = () => {
    if (currentPage * recordsPerPage < news.length) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      setSlicedNews(news.slice((nextPage - 1) * recordsPerPage, nextPage * recordsPerPage));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const previousPage = currentPage - 1;
      setCurrentPage(previousPage);
      setSlicedNews(news.slice((previousPage - 1) * recordsPerPage, previousPage * recordsPerPage));
    }
  };

  const isNextButtonDisabled = currentPage * recordsPerPage >= news.length;

  const onClickNewsLink = (id, title) => {
    Router.push(`/news/${id}?${title}`);

  }

  return (
    <>
    <head>
    



      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9476597782320237"
     crossorigin="anonymous"></script>
      </head>
    <main className={`flex min-h-screen flex-col  ${inter.className}`}>
   
      
<Grid container spacing={2} justifyContent={'center'} >
<Grid size = {12}>
<Typography sx={{color: '#fff', fontSize: 25, fontWeight: 'bold'}}>
      Conquer Exams with Past Papers!
      </Typography>
        <Typography sx={{color: '#fff', fontSize: 18}}>

      
        {/* eslint-disable react/no-unescaped-entities */}
        <p>
  Welcome to Pakistan Past Papers, your one-stop resource for aced exams! We understand the importance of thorough preparation, and that\'s why we provide a comprehensive collection of past papers from various Pakistani educational boards. Whether you\'re a student striving for top grades, a teacher seeking effective revision materials, or a parent supporting your child\'s academic journey, Pakistan Past Papers is here for you.

  <br />

  <br />

  Navigate seamlessly through our user-friendly platform to find past papers for all major subjects across different classes and boards. Download them easily and utilize them to practice, test your knowledge, and identify areas for improvement. With Pakistan Past Papers as your study partner, you'll be well-equipped to tackle your exams with confidence!
</p>

{/* eslint-enable react/no-unescaped-entities */}
</Typography>
</Grid>
        <Grid
        id = "gridNews"
        size = {{ xs: 12, sm: 4 }} sx={{backgroundColor: '#fff'}}>
          <Stack>
{
  slicedNews.map((news) => (
    <ListItem
    key={news.id}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>

        <span>
        {news.Date} 
        </span>
        <Link
        
      component="button"
      onClick={() => onClickNewsLink(news.id, news.title)}
      >
      {news.title}
      </Link>
      </div>
      
     
     
      
    </ListItem>
  ))
    
}
<Stack direction="row" justifyContent="space-between" alignItems="center">
            <Button variant="contained" startIcon = {<ArrowLeftSharp />} disabled={currentPage === 1} onClick={handlePreviousPage} />
              
            <Button variant="contained" endIcon={<ArrowRightSharp />} disabled={isNextButtonDisabled} onClick={handleNextPage} />
              
          </Stack>
          </Stack>
          
        </Grid>
        
      
      
      
     
</Grid>
{/* eslint-enable react/no-unescaped-entities */}


    </main>
    </>
  );
}

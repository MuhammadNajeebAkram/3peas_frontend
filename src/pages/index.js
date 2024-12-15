import Image from "next/image";
import { Inter } from "next/font/google";
import { Box } from "@mui/system";
import { Link, ListItem, Stack, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { ArrowRightSharp, ArrowLeftSharp } from '@mui/icons-material';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MainNews } from "@/components/news/main_news";
const inter = Inter({ subsets: ["latin"] });
const API_URL = process.env.PUBLIC_API_URL;
const AWS_NEWS = process.env.AWS_NEWS_IMAGE_URL;
const AWS_Blog = process.env.AWS_BLOG_BUCKET_URL;

export async function getServerSideProps(context) {
  

  const { news, news_image } = await getTopNews(`${API_URL}get_top_active_news_title`)
  const {blog, blog_image} = await getTopBlog(`${API_URL}get_top_active_blog_title`)
  
  return {
    props: {
      news: news || null, // Pass the fetched subject data as props
      news_image,
      AWS_NEWS,
      blog,
      blog_image,
      AWS_Blog,
      //subjectArray, // Pass the subjectArray for initial rendering
      
      
    },
  };
  
}

async function getTopNews(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      // Handle non-2xx responses
      throw new Error('Failed to fetch news data');
    }
    
    const { success, news, news_image } = await response.json();

    if (success == 0) {
      // Handle case where the response indicates failure
      throw new Error('API did not return success');
    }
   return {
    news: news,
    news_image: news_image,
    
    
   }

    
  } catch (error) {
    // Handle the error here, maybe log it or show an error message
    console.error('Error fetching subject data:', error);

    return {
      notFound: true, // This will return a 404 page
    };
  }
}

async function getTopBlog(url) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      // Handle non-2xx responses
      throw new Error('Failed to fetch news data');
    }
    
    const { success, blog, blog_image } = await response.json();

    if (success == 0) {
      // Handle case where the response indicates failure
      throw new Error('API did not return success');
    }
   return {
    blog: blog,
    blog_image: blog_image,
    
    
   }

    
  } catch (error) {
    // Handle the error here, maybe log it or show an error message
    console.error('Error fetching subject data:', error);

    return {
      notFound: true, // This will return a 404 page
    };
  }
}


export default function Home({news, news_image, AWS_NEWS, blog, blog_image, AWS_Blog}) {
  
  const defaultEmptyNews = [
    {id: 0, title: 'No News Found', language: 1, Date: Date.now()},
    {id: 0, title: 'No News Found', language: 1, Date: Date.now()},
    {id: 0, title: 'No News Found', language: 1, Date: Date.now()},
    {id: 0, title: 'No News Found', language: 1, Date: Date.now()},
  ];
  const defaultEmptyBlog = [
    {id: 0, title: 'No Blog Found', language: 1, Date: Date.now()},
  ]
  
  


  return (
    <>
   
    <main className={`flex min-h-screen flex-col  ${inter.className}`}>
   <MainNews news = {Array.isArray(news) ? news : defaultEmptyNews} topNewsImage = {news_image}  AWS_NEWS = {AWS_NEWS} 
            blog = {Array.isArray(blog) ? blog : defaultEmptyBlog} blogImage = {blog_image} AWS_Blog = {AWS_Blog} ></MainNews>
      



    </main>
    </>
  );
}

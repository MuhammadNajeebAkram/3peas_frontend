import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, display } from "@mui/system";
import { Link, ListItem, Stack, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2"
import { ArrowRightSharp, ArrowLeftSharp } from '@mui/icons-material';
import { useState } from "react";
import { useRouter } from "next/navigation";
import { QuestionOfTheDay } from "./question_of_the_day";
import { WordOfTheDay } from "./word_of_the_day";
import { MainBlog } from "./main_blog";
import { SecondNewsSet } from "./second_news_set";
import { FirstNewsSet } from "./first_news";

const inter = Inter({ subsets: ["latin"] });


export const MainNews = (props) =>{

    const news = props.news;
    const [topTwoNews, setTopTwoNews] = useState(news.slice(0, 2));
    const [secondNews, setSecondNews] = useState(news.slice(2, 4));

   

  const Router = useRouter();  

  
    return(

        <Grid container spacing={2} justifyContent={'center'} >
        
        <Grid container id="gridLeft"  size={{ xs: 12, sm: 4 }} style = {{display: 'flex', flexDirection: 'column'}}>
        <Grid size = {{xs:12}} sx={{flex: 1}}>
            <QuestionOfTheDay />
            </Grid>
            <Grid size = {{xs:12}} sx={{flex: 1}}>
            <WordOfTheDay />
            </Grid>
   
    
</Grid>


        <Grid container id = "gridCenter" size = {{xs:12, sm: 4}} style = {{display: 'flex', flexDirection: 'column'}}>
            <Grid size = {{xs:12}} sx={{flex: 1}}>
            <MainBlog blog = {props.blog} blogImage = {props.blogImage} AWS_Blog = {props.AWS_Blog} />
            </Grid>
            <Grid size = {{xs:12}} sx={{flex: 1}}>
            <SecondNewsSet news = {secondNews} />
                </Grid>

        </Grid>
        
        
        
        <Grid
        id = "gridRight"
        size = {{ xs: 12, sm: 4 }} sx={{flex: 1}}>
           

            

            <FirstNewsSet news = {topTwoNews} topNewsImage = {props.topNewsImage} AWS_NEWS = {props.AWS_NEWS} />

            
          
        </Grid>
        
      
      
      
     
</Grid>
    )

}
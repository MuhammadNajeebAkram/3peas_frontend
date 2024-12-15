import { Link, ListItem, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid2";

export const SecondNewsSet = (props) => {
    
    const news = props.news;
    const Router = useRouter();

    
    const onClickNewsLink = (slug) => {
        Router.push(`/news/${slug}`);
        
    
      }

    return(
        <>
         <Grid container sx={{display: "flex", flexDirection: "column"}}>
        {
            props.news.length === 0 ? (
                <p>No News Found</p>
            ): (


                <>
                {
                    props.news.map((news) => (
                    <Grid container sx={{display: "flex", flexDirection: "column", marginBottom: '5px'}}>
                    <Link
                component={'button'}                    
                onClick={() => onClickNewsLink(news.slug)}
                >
                <Grid id = 'newsTitleGrid'
                className = {news.language === 0 ? 'urdu-font-main-title' : 'english-font-main-title'}
                >
                    {news.title}

                </Grid>   
                <Grid id = 'newsDescriptionGrid'
                className = {news.language === 0 ? 'urdu-font-main-description' : 'english-font-main-description'}
                >
                    {news.description}

                </Grid>              
                
                </Link>
                <Grid className = 'english-font-main-description'>
                    {
                        news.files?.map((file, index) => (
                            <Link key={index} href = {`/files/${file.path}`}                          
                            target="_blank" rel="noopener noreferrer"
                            >
                             Link {index + 1}
                            </Link>
                          ))
                    }
                </Grid>
                <Grid id = "newsDateGrid"
                className = {news.language === 0 ? 'urdu-font-main-date' : 'english-font-main-date'}
                >
                    {news.Date}
                </Grid>
                </Grid>
                ))}
      
       
        </>


            )



        }
        </Grid>
        </>
    )
}
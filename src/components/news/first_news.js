import { Link, ListItem } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";

export const FirstNewsSet = (props) => {
  const Router = useRouter();
  const topNewsImages = props.topNewsImage;
  const AWS_NEWS = props.AWS_NEWS;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (Array.isArray(topNewsImages)) {
      const intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % topNewsImages.length);
      }, 30000); // Change image every 30 seconds

      return () => clearInterval(intervalId);
    }
  }, [topNewsImages]);

  const onClickNewsLink = (slug) => {
    Router.push(`/news/${slug}`);
  };

  return (
    <Grid container sx={{display: "flex", flexDirection: "column"}}>
{
  props.news.length === 0 ? (
    <p>No News Found</p>
  ): (
    <>
    <Grid container id = "grid1stNews"  
    size = {{xs: 12}} 
    sx={{paddingTop: '20px', display: "flex", flexDirection: "column"}}>
    <Link component="button" onClick={() => onClickNewsLink(props.news[0].slug)}>
    {
      Array.isArray(topNewsImages) && (
                
        <Grid>
          <Image
                  style={{
                    height: "100%",
                    width: "500px",
                    maxHeight: "250px",
                    objectFit: "cover",
                    marginBottom: 10,
                  }}
                  src={`${AWS_NEWS}${topNewsImages[currentImageIndex].path}`}
                  alt={props.news[0].title}
                  width={400}
                  height={200}
                />

        </Grid>
        
        
        
      )
    }
    <Grid className = {props.news[0].language === 0 ? 'urdu-font-main-title' : 'english-font-main-title'}>
        {props.news[0].title}

        </Grid>
    <Grid className = {props.news[0].language === 0 ? 'urdu-font-main-description' : 'english-font-main-description'}
    sx={{marginTop : '15px'}}
    >
          {props.news[0].description} 
        </Grid>

    </Link>
    <Grid className = 'english-font-main-description'>
    {
      props.news[0].files?.map((file, index) => (             
        
        <Link
                key={index}
                href={`/files/${file.path}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", color: "#ccc", textDecoration: "underline" }}
                
              >
                Link {index + 1}
              </Link>       

          
      ))
    }
    </Grid>
    <Grid id = "news1stDateGrid" 
    className = {props.news[0].language === 0 ? 'urdu-font-main-date' : 'english-font-main-date'}>
    {props.news[0].Date}
    </Grid>
      
      </Grid>

      {/* ------------------------------------------ */}

<Grid container id = "grid2ndNews"  
size = {{xs: 12}} 
sx={{display: "flex", flexDirection: "column", paddingTop: "20px"}}>
  {
    props.news.length > 1 && (
      <>
      
      <Link
                key={props.news[1].slug}
                component="button"
                onClick={() => onClickNewsLink(props.news[1].slug)}
              >
                <Grid className = {props.news[1].language === 0 ? 'urdu-font-main-title' : 'english-font-main-title'}>
                {props.news[1].title}
                 </Grid>
                 <Grid sx={{marginTop : '15px'}}
                 className = {props.news[1].language === 0 ? 'urdu-font-main-description' : 'english-font-main-description'}>
                {props.news[1].description}
                 </Grid>
              </Link>

     
      <Grid className = 'english-font-main-description'>
      {
        props.news[1].files &&
        props.news[1].files.map((file, index) => (
          <Link
                    key={index}
                    href={`/files/${file.path}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "block", color: "#ccc", textDecoration: "underline" }}
                  >
                    Link {index + 1}
                  </Link>
        ))
      }
      </Grid>
      <Grid className = {props.news[1].language === 0 ? 'urdu-font-main-date' : 'english-font-main-date'}>
      {props.news[1].Date}
      </Grid>
      </>
    )
  }
      </Grid>

      </>
  )
}
    
    
    </Grid>
  );
};

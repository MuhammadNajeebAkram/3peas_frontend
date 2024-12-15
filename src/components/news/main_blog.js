import { Link} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Grid from "@mui/material/Grid2"

export const MainBlog = (props) => {
    const Router = useRouter();

    const onClickBlogLink = (slug) => {
        Router.push(`/blogs/${props.blog[0].slug}`);
    }
    return (
        <>
           <Grid container sx={{display: "flex", flexDirection: "column", paddingTop: '20px'}}>
            {
                props.blog.length === 0 ?(
                    <p>No Blog Found</p>
                ): (
                    <>
                    <Link component="button" onClick={() => onClickBlogLink(props.blog[0].slug)}>
                    <Grid id = "blogImageGrid">
                        {
                            Array.isArray(props.blogImage) && (
                                <Image
                                    style={{
                                        height: "100%", // Adjust height automatically
                                        width: "500px", // Set a specific width
                                        maxHeight: '250px',
                                        objectFit: "cover",
                                        marginRight: "20px", // Add margin for spacing
                                    }}
                                    src={`${props.AWS_Blog}${props.blogImage[0].path}`}
                                    alt={props.blogImage[0].description}
                                    width={400} // Maintain width for responsiveness
                                    height={200}
                                />
                            )
                        }

                    </Grid>
                    <Grid id = "blogTitleGrid" className = {props.blog[0].language === 0 ? 'urdu-font-main-title' : 'english-font-main-title'}>
                    {props.blog[0].title}

                    </Grid>

                    <Grid id = "blogDescriptionGrid" className = {props.blog[0].language === 0 ? 'urdu-font-main-description' : 'english-font-main-description'}>
                    {props.blog[0].description}

                    </Grid>
                    <Grid id = "blogDateGrid" className = {props.blog[0].language === 0 ? 'urdu-font-main-date' : 'english-font-main-date'}>
                    {props.blog[0].Date}
                    </Grid>
                    
                    </Link>
                    </>
                )
            }




            </Grid> 
        </>
    );
};
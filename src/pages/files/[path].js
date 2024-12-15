
  import { Inter } from "next/font/google";
 

  const inter = Inter({ subsets: ["latin"] });
  
  export async function getServerSideProps(context) {
    const path = context.query.path;
    const AWS_BUCKET_URL = process.env.AWS_NEWS_IMAGE_URL  
    
    return {
      props: {
        path: path,
        AWS: AWS_BUCKET_URL
      },
    };
  }
  
  export default function FileHandler({ path, AWS }) {
    // Handle the file data, e.g., display it, download it, etc.
    
    
    return (
      <main className={`flex min-h-screen flex-col  ${inter.className}`}>
      
        
        <iframe src= {`${AWS}${path}`} style={{position: 'absolute', height: '100%', width: '100%'}} />

      
      </main>
    );
  }
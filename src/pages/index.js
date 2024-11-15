import Image from "next/image";
import { Inter } from "next/font/google";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9476597782320237"
     crossorigin="anonymous"></script>
      </head>
    <main className={`flex min-h-screen flex-col  ${inter.className}`}>
      
      <Box>
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
      </Box>


    </main>
    </>
  );
}

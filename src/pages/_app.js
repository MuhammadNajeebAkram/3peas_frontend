import "@/styles/globals.css";
import Layout from "./layout";
import { DataProvider } from '@/context/DataContext';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
   
    <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var   
 f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WXD9V2S2');   

            `,
          }}
        />

    </Head>

  <Layout class_id={pageProps.class_id} class_name={pageProps.class_name} subject_id = {pageProps.subject_id}
  subject_name = {pageProps.subject_name} board_id = {pageProps.board_id} 
  board_name = {pageProps.board_name} year = {pageProps.year} No_Of_Links={pageProps.No_Of_Links}>
  <Component {...pageProps} />
  </Layout>
 
  </>
  

    

  ); 
}


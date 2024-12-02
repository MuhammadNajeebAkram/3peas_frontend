import "@/styles/globals.css";
import Layout from "./layout";
import { DataProvider } from '@/context/DataContext';
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google'; // Import the GoogleTagManager component

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>  
    

    </Head>

  <Layout class_id={pageProps.class_id} class_name={pageProps.class_name} subject_id = {pageProps.subject_id}
  subject_name = {pageProps.subject_name} board_id = {pageProps.board_id} 
  board_name = {pageProps.board_name} year = {pageProps.year} No_Of_Links={pageProps.No_Of_Links}>
    <GoogleTagManager accountId="GTM-WXD9V2S2" /> {/* Replace with your GTM container ID */}
  <Component {...pageProps} />
  </Layout>
 
  </>
  

    

  ); 
}


import "@/styles/globals.css";
import Layout from "./layout";
import { DataProvider } from '@/context/DataContext';
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google'; // Import the GoogleTagManager component
import Script from 'next/script';




export default function App({ Component, pageProps }) {
  return (
    <>
    

  <Layout class_id={pageProps.class_id} class_name={pageProps.class_name} subject_id = {pageProps.subject_id}
  subject_name = {pageProps.subject_name} board_id = {pageProps.board_id} 
  board_name = {pageProps.board_name} year = {pageProps.year} No_Of_Links={pageProps.No_Of_Links}>
    
  <Component {...pageProps} />
  </Layout>
  
  </>
  

    

  ); 
}


import "@/styles/globals.css";
import Layout from "./layout";
import { DataProvider } from '@/context/DataContext';
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google'; // Import the GoogleTagManager component
import Script from 'next/script';
import { Noto_Nastaliq_Urdu, Roboto_Serif } from 'next/font/google';

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  subsets: ['latin'],
  weight: '400',
});

const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  weight: '100',
  style: ['normal', 'italic'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <div className={`${notoNastaliqUrdu.className} ${robotoSerif.className}`}>

  <Layout class_id={pageProps.class_id} class_name={pageProps.class_name} subject_id = {pageProps.subject_id}
  subject_name = {pageProps.subject_name} board_id = {pageProps.board_id} 
  board_name = {pageProps.board_name} year = {pageProps.year} No_Of_Links={pageProps.No_Of_Links}>
    
  <Component {...pageProps} />
  </Layout>
  </div>
  </>
  

    

  ); 
}


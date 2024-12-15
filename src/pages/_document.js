import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >

      <script
            dangerouslySetInnerHTML={{
              __html: `
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XTBWMQTCLC"></>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XTBWMQTCLC');
</script>

`
}}
  />
     
     <style>{`@import url(&apos;https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400&family=Roboto+Serif:ital,wght@0,1;opsz,wght@8..144,100..900&display=swap&apos;);`}</style>



     
        </Head>
      
      <body>
      


     
        <Main />
        
        <NextScript />
      </body>
    </Html>
  );
}

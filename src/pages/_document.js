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
     
    



     
        </Head>
      
      <body>
      


     
        <Main />
        
        <NextScript />
      </body>
    </Html>
  );
}

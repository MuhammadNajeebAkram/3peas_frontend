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
     
      <style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400..700&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap');
</style>


     
        </Head>
      
      <body>
      


     
        <Main />
        
        <NextScript />
      </body>
    </Html>
  );
}

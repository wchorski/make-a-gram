import '../styles/globals.css'
import { GlobalStyles } from "../styles/ThemeGlobalStyle" 
import  Script  from "next/script";

const UMAMI_SCRIPT = process.env.NEXT_PUBLIC_UMAMI_SCRIPT
const UMAMI_ID = process.env.NEXT_PUBLIC_UMAMI_ID

function MyApp({ Component, pageProps }) {


  return (<>

    <Script
      id="umami-next"
      strategy="afterInteractive"
      async
      data-website-id={UMAMI_ID}
      src={`/stts/${UMAMI_SCRIPT}`}
    />
 
    
    <GlobalStyles />
    
    <Component {...pageProps} />
</>)}

export default MyApp

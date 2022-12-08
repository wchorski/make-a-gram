import '../styles/globals.css'
import { GlobalStyles } from "../styles/ThemeGlobalStyle" 

function MyApp({ Component, pageProps }) {
  return (<>
    <GlobalStyles />
    
    <Component {...pageProps} />
</>)}

export default MyApp

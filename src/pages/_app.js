import { GlobalStyle } from "../styles/Global"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      
      <GlobalStyle />
    </>
  )
}

export default MyApp

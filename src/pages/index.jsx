import Head from "next/head"

import Navigation from "../components/Navigation"
import UnidadeCurricular from "../components/UnidadeCurricular"

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio Senac</title>
      </Head>

      <header>
        <Navigation />
      </header>
      
      <UnidadeCurricular />
    </>
  )
}

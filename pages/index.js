import Head from 'next/head'
import BackToTop from '../Components/BackToTop'
import EdageBaner from '../Components/EdageBaner'
import Footer from '../Components/Footer'
import Grid1 from '../Components/Grid1'
import Grid2 from '../Components/Grid2'
import Navbar from '../Components/Navbar'
import Services from '../Components/Services'
import Slider from '../Components/Slider'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Microsoft – Cloud, Computers, Apps &amp; Gaming</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar/>
       <Slider/>
       <Services/>
       <Grid1/>
       <EdageBaner/>
       <Grid2/>
      <BackToTop/>
      <Footer/>
      </main>
    </div>
  )
}

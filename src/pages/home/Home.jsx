import './home.css'
import Header from "../../layout/header/Header.jsx"
import Footer from '../../layout/footer/Footer.jsx'
import Banner from '../../components/banner/Banner.jsx'
import Feature from '../../components/feature/Feature.jsx'
import url1 from "../../assets/icon-chat.png"
import url2 from "../../assets/icon-money.png"
import url3 from "../../assets/icon-security.png"
import { useEffect } from 'react'

function Home() {
  const content1 = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
  const content2 = "The more you save with us, the higher your interest rate will be!"
  const content3 = "We use top of the line encryption to make sure your data and money is always safe. "
  useEffect(() => {
    document.title = "Argent Bank - Home Page"; // Le titre dans le navigateur
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <section className='feature-home'>
        <Feature className='feature-home-item' url={url1} title="You are our #1 priority" content={content1} />
        <Feature className='feature-home-item' url={url2} title="More savings means higher rates" content={content2} />
        <Feature className='feature-home-item' url={url3} title="Security you can trust" content={content3} />
      </section>
      <Footer />
    </>
  )
}

export default Home

import './home.css'
import Header from "../../layout/header/Header.jsx"
import Footer from '../../layout/footer/Footer.jsx'
import Banner from '../../components/banner/Banner.jsx'
import Feature from '../../components/feature/Feature.jsx'
import url1 from "../../assets/icon-chat.png"

function Home() {
  const content1 = "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."

  return (
    <>
      <Header />
      <Banner />
      <p>home page</p>
      <Feature url={url1} title="You are our #1 priority" content={content1} />
      <Footer />
    </>
  )
}

export default Home

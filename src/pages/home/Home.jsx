import './home.css'
import Header from "../../layout/header/Header.jsx"
import Footer from '../../layout/footer/Footer.jsx'
import Banner from '../../components/banner/Banner.jsx'
import Feature from '../../components/feature/Feature.jsx'

function Home() {

  return (
    <>
      <Header />
      <Banner />
      <p>home page</p>
      <Feature />
      <Footer />
    </>
  )
}

export default Home

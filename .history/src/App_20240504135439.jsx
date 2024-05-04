import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import OurProject from './components/OurProject'
import Footer from './components/Footer'
import Contributors from './components/Contributors'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-10 px-4'>
        <LandingPage />
        <FeatureSection />
        <OurProject />
        <Contributors />
        <Footer />
      </div>
    </>
  )
}

export default App

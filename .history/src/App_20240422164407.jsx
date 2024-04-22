import Navbar from './components/Navbar'
import TriangleTheorem from './components/TriangleTheorem'
import OurProject from './components/OurProject'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <TriangleTheorem />
        {/* <FeatureSection /> */}
        <OurProject />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App

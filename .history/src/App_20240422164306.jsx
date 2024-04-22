import Navbar from './components/Navbar'
import TriangleTheorem from './components/TriangleTheorem'
import Workflow from './components/Workflow'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <TriangleTheorem />
        {/* <FeatureSection /> */}
        <Workflow />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App

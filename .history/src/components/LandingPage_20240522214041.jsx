// import video1 from '../assets/video1.mp4'
import projectpicture from '../assets/pictureproject.png'
import quadrilateral from '../assets/quadrilateral.png'
import sumproperty from '../assets/sumproperty.png'
import innerouterangles from '../assets/innerouterangles.png'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center mt-3 lg:mt-5' id='landing-page'>
      <h1 className='text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide'>
        Quadrilateral Family
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
          {' '}
          {/* for developers */}
        </span>
      </h1>
      <p className='mt-8 text-lg text-center text-white-500 max-w-4xl'>
        Quadrilaterals are four-sided polygons with four vertices and four interior angles. There
        are different types of quadrilaterals such as the square, kite, rectangle, rhombus, and so
        on.
      </p>
      <img
        className='rounded-lg w-4/5 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
        src={quadrilateral}
        alt='quadrilateral'
      />

      <h1 className='text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide'>
        Angles Sum Property
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
          {' '}
          {/* for developers */}
        </span>
      </h1>
      <p className='mt-8 text-lg text-center text-white-500 max-w-4xl'>
        The unknown angles of a quadrilateral can be easily calculated if the other angles are known
        because the interior angles of a quadrilateral always sum up to 360°. The sum of an interior
        angle and its corresponding exterior angle is always 180°.{' '}
      </p>
      <img
        className='rounded-lg w-4/5 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
        src={projectpicture}
        alt='quadrilateral'
      />

      <div className='flex justify-center my-10'>
        {/* <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a> */}
        {/* <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a> */}
      </div>
      <div className='flex mt-5 justify-center'>
        {/* <video
          autoPlay
          loop
          muted
          className='rounded-lg w-4/5 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
        > */}
        {/* <source src={video3} type='video/mp4' /> */}
        {/* Your browser does not support the video tag. */}
        {/* <img
          className='rounded-lg w-4/5 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
          src={project}
          alt='project'
        /> */}
        {/* </video> */}
      </div>
    </div>
  )
}

export default LandingPage

// import video1 from '../assets/video1.mp4'
import projectpicture from '../assets/pictureproject.png'
import quadrilateral from '../assets/quadrilateral.png'
import sumproperty from '../assets/sumproperty.png'
import innerouterangles from '../assets/innerouterangles.png'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center mt-3 lg:mt-5' id='landing-page'>
      <h1 className='text-orange-400 text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide'>
        Quadrilateral Family
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
          {' '}
          {/* for developers */}
        </span>
      </h1>
      <p className='mt-8 text-lg text-center text-white-500 max-w-4xl'>
        A quadrilateral is a two-dimensional shape with four sides, four vertices, and four angles.
      </p>
      <img
        className='rounded-lg w-4/5 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
        src={quadrilateral}
        alt='quadrilateral'
      />

      <p className='mt-8 text-lg text-center text-white-500 max-w-4xl'>
        The unknown angles of a quadrilateral can be easily calculated if the other angles are known
        because the interior angles of a quadrilateral always sum up to 360°. The sum of an interior
        angle and its corresponding exterior angle is always 180°.{' '}
      </p>
      <img
        className='rounded-lg w-4/5 border border-orange-700 shadow-sm shadow-orange-400 mb-12'
        src={projectpicture}
        alt='quadrilateral'
      />
    </div>
  )
}

export default LandingPage

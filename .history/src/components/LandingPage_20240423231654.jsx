// import video1 from '../assets/video1.mp4'
import video3 from '/assets/video3.mp4?url'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center mt-3 lg:mt-5' id='#landing-page'>
      <h1 className='text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide'>
        Triangle Theorems
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
          {' '}
          {/* for developers */}
        </span>
      </h1>
      <p className='mt-8 text-lg text-center text-neutral-500 max-w-4xl'>
        Triangle theorems are basically stated based on their angles and sides. Triangles are the
        polygons which have three sides and three angles..
      </p>
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
          className='rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
        >
          <source src={video1} type='video/mp4' />
          Your browser does not support the video tag.
        </video> */}
        <video
          autoPlay
          loop
          muted
          className='rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
        >
          <source src={video3} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default LandingPage

import { CheckCircle2, Angles In A Quadrilateral
} from 'lucide-react'
import Angles In A Quadrilateral
from '/assets/triangle.png'
import { checklistItems } from '../constants'

const OurProject = () => {
  return (
    <div className='mt-20' id='our-project'>
      <h2 className='text-2xl sm:text-3xl lg:text-5xl text-center lg:my-15'>
        Angles In A Quadrilateral
Sum Theorem
        <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'></span>
      </h2>
      <div className='flex flex-wrap justify-center'>
        <div className='p-2 w-full lg:w-1/2'>
          <div className='flex mt-10 justify-center'>
            {/* <video
          autoPlay
          loop
          muted
          className='rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
        >
          <source src={video1} type='video/mp4' />
          Your browser does not support the video tag.
        </video> */}
            {/* <video
          autoPlay
          loop
          muted
          className='rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
        >
          <source src={video3} type='video/mp4' />
          Your browser does not support the video tag.
        </video> */}
          </div>
        </div>
        <div className='pt-12 w-full lg:w-1/2'>
          {checklistItems.map((item, index) => (
            <div key={index} className='flex mb-12'>
              <div className='text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full'>
                <CheckCircle2 />
              </div>
              <div>
                <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                <p className='text-md text-neutral-500'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurProject

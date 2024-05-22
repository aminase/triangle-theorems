import { CheckCircle2, Triangle } from 'lucide-react'

import ourproject from '../assets/ourproject.jpg'
import sumproperty from '../assets/sumproperty.png'
import innerouterangles from '../assets/innerouterangles.png'
import anglesumshown from '../assets/anglesumshown.png'

import { checklistItems } from '../constants'

const OurProject = () => {
  return (
    <div className='flex flex-col items-center mt-3 lg:mt-5' id='our-project'>
      <h1 className='text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide'>
        Our Project
        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
          {' '}
          {/* for developers */}
        </span>
      </h1>
      <p className='mt-8 text-lg text-center text-white-500 max-w-4xl'>
        Aim of this project is to visually show that sum of the interior angles (red) of a
        quadrilateral is 360° and the sum of the exterior angles (blue) is 360°. If there is missing
        angle, we can use this property to find the measure of the missing angle.
      </p>
      <img
        className='rounded-lg w-4/5 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
        src={ourproject}
        alt='quadrilateral'
      />
      <img
        className='rounded-lg w-4/5 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
        src={sumproperty}
        alt='quadrilateral'
      />
      <img
        className='rounded-lg w-4/5 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
        src={anglesumshown}
        alt='quadrilateral'
      />
      <img
        className='rounded-lg w-4/5 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4'
        src={innerouterangles}
        alt='quadrilateral'
      />
    </div>
  )
}

export default OurProject

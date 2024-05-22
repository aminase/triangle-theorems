import { CheckCircle2, Triangle } from 'lucide-react'

import ourproject from '../assets/ourproject.jpg'
import sumproperty from '../assets/sumproperty.png'
import innerouterangles from '../assets/innerouterangles.png'

import { checklistItems } from '../constants'

const OurProject = () => {
  return (
    <div className='mt-20' id='our-project'>
      <h1 className='text-2xl sm:text-3xl lg:text-5xl text-center tracking-wide'>
        Interior Angles Sum Property
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
        src={sumproperty}
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

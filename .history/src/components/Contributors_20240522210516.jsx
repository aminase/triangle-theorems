import { testimonials } from '../constants'

const Contributors = () => {
  return (
    <div className='mt-20 tracking-wide' id='contributors'>
      <h2 className='text-2xl sm:text-3xl lg:text-5xl text-center my-10 lg:my-15'>
        Contributors on a project
      </h2>
      <div className='flex flex-wrap justify-center'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
            <div className='bg-neutral-900 rounded-md p-6 text-md border border-neutral-800'>
              <p>{testimonial.text}</p>
              <div className='flex mt-2 items-start'>
                <img
                  className='w-12 h-12 mr-6 rounded-full border border-neutral-300'
                  src={testimonial.image}
                  alt=''
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className='text-sm font-normal italic text-neutral-600'>
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contributors

import { resourcesLinks, platformLinks, communityLinks } from '../constants'
const Footer = () => {
  return (
    <footer className='mt-10 border-t py-7 border-neutral-700 left'>
      <div className='flex justify-start'>
        <ul>
          <li className='text-neutral-700 '>
            ©2024 Prva privatna osnovna škola "Isa-beg Ishaković
          </li>
          <li className='text-neutral-700 '>
            {' '}
            Designed by{' '}
            <a
              className='text-neutral-800 hover:text-orange-700  visited:text-neutral-700'
              // className='underline text- text-orange-700 hover:text-white visited:text-purple-600'
              href='https://github.com/aminase'
              // className='text-neutral-300 hover:text-white'
            >
              aminase
            </a>{' '}
          </li>
        </ul>
      </div>
      {/* </div> */}
    </footer>
  )
}

export default Footer

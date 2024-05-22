import { resourcesLinks, platformLinks, communityLinks } from '../constants'
const Footer = () => {
  return (
    <footer className='mt-20 border-t py-10 border-neutral-700 left'>
      <div className='flex justify-end'>
        {/* <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'> */}
        {/* <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div> */}
        <ul className='space-y-2'>
          <li>
            Copyright © 2024{' '}
            <a
              className='text-orange-500 hover:text-orange-400  visited:text-orange-600'
              // className='underline text- text-orange-700 hover:text-white visited:text-purple-600'
              href='https://github.com/aminase'
              // className='text-neutral-300 hover:text-white'
            >
              aminase.
            </a>
            All Rights Reserved.
          </li>
          <li></li>
        </ul>
      </div>
      {/* </div> */}
    </footer>
  )
}

export default Footer

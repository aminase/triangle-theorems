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
        {/* ©2024 Prva privatna osnovna škola "Isa-beg Ishaković <br /> Powered by{' '} */}
        <a href='https://github.com/aminase'>amina</a>
        <ul className='space-y-2'>
          <li>
            <a href='https://github.com/aminase' className='text-neutral-300 hover:text-white'>
              amina
            </a>
          </li>
        </ul>
      </div>
      {/* </div> */}
    </footer>
  )
}

export default Footer
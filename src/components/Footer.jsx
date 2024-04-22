import { resourcesLinks, platformLinks, communityLinks } from '../constants'
const Footer = () => {
  return (
<<<<<<< HEAD
    <footer className='mt-20 border-t py-10 border-neutral-700'>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* <div>
=======
    <footer className='mt-20 border-t py-10 border-neutral-700 left'>
      {/* <div className='grid grid-cols-2 lg:grid-cols-3 gap-4'> */}
      {/* <div>
>>>>>>> 6f2c9cc96328884e89fdbc2e407126811b9e6559
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
<<<<<<< HEAD
        © Copyright 2024 PPOS 'Isa-beg Ishakovic'
      </div>
=======
      
© Prva privatna osnovna škola "Isa-beg Ishaković
      {/* </div> */}
>>>>>>> 6f2c9cc96328884e89fdbc2e407126811b9e6559
    </footer>
  )
}

export default Footer

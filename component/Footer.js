import Link from 'next/link'
import React from 'react'

const Footer = () => (
  <footer className="bg-black py-4">
    <div className="container mx-auto flex flex-wrap items-center">
      <div className="w-full md:w-1/3 text-center md:text-left">
        <Link legacyBehavior href='/privacy-policy'>
          <a className="text-white hover:text-yellow-200">Privacy Policy</a>
        </Link>
        
      </div>
      <div className="w-full md:w-1/3 text-center md:text-center">
        <a href="mailto:info@example.com" className="text-white hover:text-yellow-200">eric@themegoliath.com</a>
        <div className="text-white">7611 Ben Ave</div>
        <div className="text-white">North Hollywood, CA 91605</div>
      </div>
      <div className="w-full md:w-1/3 text-center md:text-right">
      <Link legacyBehavior href="/terms-and-conditions">
          <a className="text-white hover:text-yellow-200 ml-4">Terms & Conditions</a>
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer

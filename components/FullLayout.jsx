import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { links } from '@/lib/data';

const FullLayout = ({children}) => {
  return (
    <div>
        <Navbar links={links} />
        {children}
        <Footer />
    </div>
    
  )
}

export default FullLayout
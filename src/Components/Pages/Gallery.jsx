import React from 'react'
import Navbar1 from '../Navbar1/Navbar1'
import Navbar2 from '../Navbar2/Navbar2'
import Footer from '../Footer/Footer'
import Galleryhero from '../Gallerymainsection/Galleryhero'
import Gallersecond from '../Gallerysecond/Gallersecond'

const Gallery = () => {
  return (
    <>
   {/* <Navbar1/> */}
   <Navbar2/>
   <Galleryhero/>
   <Gallersecond/>
   <Footer/>
   </>
  )
}

export default Gallery
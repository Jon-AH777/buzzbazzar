import React from 'react'
import Navbar from '@/components/home/navbar/Navbar'
import Footer from '@/components/home/footer/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  

const AppLayout = ({ children }) => {
  return (
    <> 
    <div className='bg-gray-100'>
        <Navbar />
        {children}
        <Footer />
    </div>
    </>
  )
}

export default AppLayout
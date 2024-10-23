import { faTwitter, faLinkedin , faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='min-h-80 bg-violet-900 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)] text-white'>
        <div>
          <h1 className='text-3xl'><FontAwesomeIcon icon={faCartShopping} className='me-3'/>E-CART</h1>
          <p className='text-justify mt-4 text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit illo in veniam excepturi, officiis, praesentium rerum odio placeat ipsum explicabo neque possimus corporis vitae debitis labore voluptate unde qui nisi.</p>
        </div>
        <div className='md:flex justify-center mt-10 md:mt-0'>
        <div>
          <h1 className='text-3xl'>LINKS</h1>
          <Link to={'/'}><p className='mt-4'>Home</p></Link>
          <Link to={'/wishlist'}><p className='mt-3'>Wishlist</p></Link>
          <Link to={'/cart'}><p className='mt-3'>Cart</p></Link>
        </div>
        </div>
        <div className='md:flex justify-center mt-10 md:mt-0'>
          <div>
            <h1 className='text-3xl'>GUIDES</h1>
            <p className='mt-4'>React</p>
            <p className='mt-3'>React Bootstrap</p>
            <p className='mt-3'>Bootswatch</p>
          </div>
        </div>
        <div className='md:px-10 mt-10 md:mt-0'>
          <h1 className='text-3xl'>CONTACT US</h1>
          <div className='flex mt-4'>
            <input type="text" placeholder='Email' className='w-5/6 p-2'/>
            <button className='py-2 px-3 bg-orange-600'>Subscribe</button>
          </div>
        
        <div className='flex justify-between mt-5'>
        <FontAwesomeIcon icon={faTwitter} className='text-3xl'/>
        <FontAwesomeIcon icon={faLinkedin} className='text-3xl' />
        <FontAwesomeIcon icon={faFacebook} className='text-3xl'  />
        <FontAwesomeIcon icon={faInstagram} className='text-3xl'  />
        </div>
        </div>
    </div>
  )
}

export default Footer


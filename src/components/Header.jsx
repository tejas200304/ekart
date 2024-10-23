import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



function Header() {
  const wishlistArray = useSelector((state)=>state.wishlist)
  console.log(wishlistArray);
  
  const cartArray = useSelector((state)=>state.cartItem)
  console.log(cartArray);
  

  const [show , setshow] = useState(false)

  const change = ()=>{
    setshow(!show)
  }

  return (
    <>
    <div className='w-full min-h-20 bg-violet-900 p-2 text-white md:flex items-center pt-4 md:pt-0 fixed'>
      <div className='flex w-full'>
      <Link to={'/'}><h1 className='text-3xl'><FontAwesomeIcon icon={faCartShopping} className='me-3'/>E-KART</h1></Link>
      <button onClick={change} className='border border-white p-2 rounded ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>
      </div>

     { show &&  <div className='mt-4 flex  md:hidden'>
      <Link to={'/wishlist'}><button className='flex items-center p-4  border border-white rounded me-4 hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faHeart}className='me-2' style={{color:'red'}}/>Wishlist<span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{wishlistArray.length}</span></button></Link>
      <Link to={'/cart'}><button className='flex items-center p-4  border border-white rounded me-4 hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faCartShopping} className='me-2' style={{color:'green'}} />Cart<span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{cartArray.length}</span></button></Link>
      </div>}

      <div className='md:flex ms-auto hidden'>
     <Link to={'/wishlist'}> <button className=' flex items-center p-4 border border-white rounded me-4 hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faHeart}className='me-2' style={{color:'red'}}/>Wishlist<span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{wishlistArray.length}</span></button></Link>
      <Link to={'/cart'}><button className='flex items-center p-4  border border-white rounded me-4 hover:bg-white hover:text-violet-900'><FontAwesomeIcon icon={faCartShopping} className='me-2' style={{color:'green'}} />Cart<span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{cartArray.length}</span></button></Link>
      </div>
    </div>

    </>
  )
}

export default Header
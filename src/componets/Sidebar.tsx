import { faAngleDown, faRightToBracket, faShoppingCart, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
//import FontAwesome from 'react-fontawesome'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Sidebar() {
  const [open,setopen]=useState(false)
  const navigate = useNavigate();
  const handleroute =()=>
  {
     navigate("/a")
  }
  return (
   <>
   <div className='bg-white h-screen grid-flow-row border-solid'>
    <h1 className='text-black text-3xl py-4 font-semibold'>Sri Vashista</h1>
      <div className='flex mx-5 py-10 px-10 relative'>

         <Link to='/Prodcuts'>Products</Link>
         <FontAwesomeIcon icon={faAngleDown} color='black' className={open?'absolute right-4 mt-2 rotate-180':'absolute right-4 mt-2'} onClick={()=>setopen(!open)}/>
      </div>
      <div>

      </div>
      {
        open && open ==true ?(
<>
<div className='space-y-3'>
<div className='px-10' >
<p className='drop-shadow-md z-20 bg-green-300 py-3 rounded-md'><Link to='/addproduct'>New Products</Link></p>
</div>
<div className='px-10' >
<p className='drop-shadow-md z-20 bg-green-300 py-3 rounded-md'><Link to='/updateproduct'>Update Products</Link></p>
</div>
<div className='px-10'>
<p className='drop-shadow-md z-20 bg-red-300 py-3 rounded-md'><Link to="/deleteproduct">Delete Product</Link></p>
</div>
</div>
</>
        ):(
          <></>
        )
      }
      <div className='flex mx-5 py-10 px-4 relative space-x-4'>

      
<FontAwesomeIcon icon={faUsers} className='mt-1'/>
<p><Link to="/customers">Customer</Link> </p>


</div>
      <div className='flex mx-5 py-10 px-4 relative space-x-4'>

      
      <FontAwesomeIcon icon={faShoppingCart} className='mt-1'/>
<p><Link to="/orders">Orders</Link> </p>
</div>
<div className='flex mx-5 py-10 px-4 relative space-x-4'>
<FontAwesomeIcon icon={faRightToBracket} className='mt-1'/>
<p>Log Out</p>

</div>
   </div>
   </> 
  )
}

export default Sidebar
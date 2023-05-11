import React from 'react'
import Addproduct from './componets/Addproduct'
import Sidebar from './componets/Sidebar'

function Addproductlayout() {
    return (
        <div className='grid grid-cols-12 grid-flow-col px-4 justify-center'>
       <div className='col-span-3  h-screen m-5'>
    <Sidebar/>
       </div>
       <div className='col-span-9 h-screen  space-x-3 my-20'>
    <Addproduct/>
       </div>
        </div>
      )
}

export default Addproductlayout
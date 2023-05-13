import Sidebar from './Sidebar'
import React from 'react'
import Customer from './Customer'

function Customerlayout() {
    return (
        <div className='grid grid-cols-12 grid-flow-col px-4 justify-center'>
       <div className='col-span-3  h-screen m-5'>
    <Sidebar/>
       </div>
       <div className='col-span-9 h-screen  space-x-3 my-20'>
    <Customer/>
       </div>
        </div>
      )
}

export default Customerlayout
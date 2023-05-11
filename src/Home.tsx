import React from 'react'
import Sidebar from './componets/Sidebar'
import Main from './componets/Main'
function Home() {
  return (
    <div className='grid grid-cols-12 grid-flow-col px-4 justify-center'>
   <div className='col-span-3  h-screen m-5'>
<Sidebar/>
   </div>
   <div className='col-span-9 h-screen  space-x-3'>
<Main/>
   </div>
    </div>
  )
}

export default Home
import React from 'react'

function Deleteprod() {
  return (
    <div className='space-y-10'>
      <h1 className='text-center font-bold text-3xl mx-30'>Delete Your Product</h1>
      <div className="col-span-12">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900 mb-4">Product Name</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full text-center text-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black"/>
          </div>
        </div>
        <div className= 'bg-red-600 mx-auto text-center my-auto mt-10 text-white w-40  rounded-md py-2 text-lg  '>
          <p className='text-center text-xl'>DELETE</p>
           </div>

    </div>
    
  )
}

export default Deleteprod
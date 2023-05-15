import React from 'react'

function Updateprod() {
  return (
    <div className='space-y-10'>
      <h1 className='text-center font-bold text-3xl mx-30'>Update Your Product</h1>
      <div className="mt-10 grid grid-cols-12 gap-y-8 mx-40">
        <div className="col-span-12">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" 
            placeholder="Product Name" 
            className="block w-full text-center text-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black"/>
          </div>
        </div>
        
        <div className="col-span-12">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Product Description</label>
          <div className="mt-2">
            <textarea
              className="block w-full text-center text-base rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black"
              placeholder="Product Description">
            </textarea>
          </div>
        </div>
        <div className="col-span-12">
          <label htmlFor="first-name" className="block text-sm font-xl mx-auto text-center leading-6 text-gray-900">Product Price</label>
          <div className="mt-2">
            <input type="number" name="product-price" id="first-name" autoComplete="given-name" className="block w-full text-2xl  text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black "/>
          </div>
        </div>
        </div>
        <div className= 'bg-red-600 mx-auto text-center my-auto mt-10 text-white w-40  rounded-md py-2 text-lg  '>
          <p className='text-center text-xl'>UPDATE</p>
           </div>

    </div>
    
  )
}

export default Updateprod
import React from 'react'
import { Button, Label, TextInput ,} from 'flowbite-react'
function Addproduct() {
  return (
  <>
  
        <div>

  
<form>
  <div className="space-y-12">
  
    <div className="pb-8">
   

      <div className="mt-10 grid grid-cols-12 gap-y-8 mx-40">
        <div className="col-span-12">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full text-center text-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black"/>
          </div>
        </div>
        </div>
        <div className="mt-10 grid grid-cols-12 gap-y-8 mx-40">
        <div className="col-span-12">
          <label htmlFor="first-name" className="block text-sm font-xl mx-auto text-center leading-6 text-gray-900">Product Price</label>
          <div className="mt-2">
            <input type="number" name="first-name" id="first-name" autoComplete="given-name" className="block w-full text-2xl  text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black "/>
          </div>
        </div>
        </div>
           <div className= 'bg-blue-600 mx-auto text-center my-auto mt-10 text-white w-40  rounded-md py-2 text-lg  '>
          <p className='text-center text-xl'>Submit</p>
           </div>

       

    
       
    
      </div>
      

       

   
  </div>

</form>

</div>
  </>
   
   
  )
}

export default Addproduct
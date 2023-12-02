import { useState } from "react";

const Updatemodal=({onclose,product,onprodupdate}:any)=>{
    const [price, setPrice] = useState('');
  const [name, setname] = useState('');
  
  const handleUpdate = () => {
    console.log("i am cheking values",name,price)
    if(name.length==0)
    {
        setname(product.name)
    }
    else if(price.length==0)
    {
        setPrice(product.price)
    }
    console.log("i am a value of name",name)
    // Assuming productId is passed as a prop or some state
    onprodupdate({ price, name });
  };
  const defaultcheck=()=>{
    if(product.name==name || name==undefined)
    {
          setname(product.name)
    }
   
       
  }
  const defaultcheckprice=()=>{
      if(product.price==price || price==undefined)

      {
        setPrice(product.price)
      }
  }
console.log("updating",name,price)
     return(
        <>
        <div className="popup shadow-sm w-1/2 z-10 mx-auto my-40">
        <div className="popup-inner">
        
        <form className="flex  border   rounded h-auto flex-col gap-4 w-auto max-w-md ">
      
      <div className="row mx-auto m-10 rounded-md w-auto ">
          
          <h3>Update Product Details</h3>
          <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto"  defaultValue={product.name}  placeholder="Product name" onChange={(e)=>setname(e.target.value)} onBlur={()=>defaultcheck()}/>
          <input type="text" className="border border-2  p-2 rounded-md border-grey w-3/4 mt-3 mx-auto "   defaultValue={product.price} placeholder="Price" onChange={(e)=>setPrice(e.target.value)} onBlur={()=>defaultcheckprice()}/>
          
        
      
      </div>
      <div className="flex ">
      <button
      className="bg-yellow-800 mt-2 p-4 mb-5 w-1/4 mx-auto text-white rounded"
      onClick={()=>handleUpdate()}
      >
        Update</button> 
      <button
      className="bg-black mt-2 p-4 mb-5 w-1/4 mx-auto text-white rounded"
      onClick={onclose}
      >
        Close</button> 

      </div>
         
      </form>
        </div>
      </div>
        </>
     )

}
export default Updatemodal
import React, { useContext } from 'react'
import { Button, Label, TextInput ,} from 'flowbite-react'
import { properties } from '../properties'
import { useState } from 'react';
import  SubmitAddProduct  from '../API Calls/AdminAPICalls'
import { AwsContext} from '../awsauth';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { addimageData, selectimagepath } from "../redux/alldata";

function Addproduct() {
  const [productName, setProductName]=useState("");
  const [productDescription, setProductDescription]=useState("");
  const [productPrice, setProductPrice]=useState("");
  // const [productQuantity, setProductQuantity]=useState("");
  const [brand,setbrand]=useState("")
  const [productCategory, setProductCategory]=useState("");
  const [isProductAdded, setIsProductAdded]=useState("");
  const imagePath=useSelector(selectimagepath);
  const [prodimage, setProdimage]=useState<File>();
  const {uploadtos3,imgpath}=useContext(AwsContext);
  const handleFileSelect = (e:any) => {
    console.log("sendtos3",e.target.files[0]);
    const uploadParams = {
      Bucket: 'vasisbucket',
      ContentType: 'image/png',
      Key: e.target.files[0].name,
      Body:e.target.files[0], // include the file content
      ACL: 'public-read', // make the uploaded image publicly readable
    };
  


// export const main = async () => {
//   const command = new PutObjectCommand({
//     Bucket: "test-bucket",
//     Key: "hello-s3.txt",
//     Body: "Hello S3!",
//   });

//   try {
//     const response = await client.send(command);
//     console.log(response);
//   } catch (err) {
//     console.error(err);
//   }
// };

    
    uploadtos3(uploadParams);
    console.log("uploadtos3",imagePath);
    
  }
  const handleFormSubmit = () => {
    // Your form submission logic goes here
    console.log('Before State Update:', {
      productName,
      productDescription,
      productPrice,
      brand,
      productCategory,
      prodimage,
    });
    SubmitAddProduct(
      productName,
      productDescription,
      productPrice,
      productCategory,
      setIsProductAdded,
      imagePath,
      brand
    );
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setbrand('');
    setProductCategory('');
    setProdimage(undefined);
    console.log('After State Update:', {
      productName,
      productDescription,
      productPrice,
      brand,
      productCategory,
      prodimage,
    });
    // Reset the form fields
    
  }
  
  return (
  <>
  
        <div>
        {renderSuccessAlert(productName,isProductAdded, setIsProductAdded)}
        
<form >
  <div className="space-y-12">
  
    <div className="pb-8">
   

      <div className="mt-10 grid grid-cols-12 gap-y-8 mx-40">
        <div className="col-span-12">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
          <div className="mt-2">
            <input type="text" name="first-name" id="first-name" autoComplete="given-name" 
            placeholder="Product Name" 
            value={productName}
            onChange={ (e) => {
              //console.log(e.target.value);  
              setProductName(e.target.value)}}
            className="block w-full text-center text-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black"/>
          </div>
        </div>
        
        <div className="col-span-12">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Product Description</label>
          <div className="mt-2">
            <textarea
              className="block w-full text-center text-base rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black"
              placeholder="Product Description"
              value={productDescription}
               onChange={ (e) => {
              //console.log(e.target.value);
              setProductDescription(e.target.value)}}>
            </textarea>
          </div>
        </div>
        <div className="col-span-12">
          <label htmlFor="first-name" className="block text-sm font-xl mx-auto text-center leading-6 text-gray-900">Product Price</label>
          <div className="mt-2">
            <input type="number" name="product-price" id="first-name" autoComplete="given-name" value={productPrice}
             onChange={ (e) => {
              //console.log(e.target.value);
              setProductPrice(e.target.value)}}
             className="block w-full text-2xl  text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black "/>
          </div>
        </div>
        <div className="col-span-12">
          <label htmlFor="first-name" className="block text-sm font-xl mx-auto text-center leading-6 text-gray-900">Product Brand</label>
          <div className="mt-2">
            <input type="text" name="product-brand" id="first-name" autoComplete="given-name" value={brand}
             onChange={ (e) => {
              //console.log(e.target.value);
              setbrand(e.target.value)}}
             className="block w-full text-2xl  text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black "/>
          </div>
        </div>
        {/* <div className="col-span-12">
          <label htmlFor="first-name" className="block text-sm font-xl mx-auto text-center leading-6 text-gray-900">Product Quantity</label>
          <div className="mt-2">
            <input type="number" 
            name="product-quantity" 
             onChange={ (e) => {
              //console.log(e.target.value);
              setProductQuantity(e.target.value)}}
            id="first-name" autoComplete="given-name" className="block w-full text-2xl  text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-black "/>
          </div>
        </div> */}
        <div className="col-span-12">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">Product Category</label>
          <div className='flex flex-col mb-4 w-full  h-full '>

   

<select onChange={(event)=>setProductCategory(event.target.value)} id="repeat-password" value={productCategory} className="shadow-sm   border   text-gray-900 text-sm rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" name="" >
      <option value="">select product</option>
        <option value="stove">Stove</option>
        <option value="waterfilter">Waterfilter</option>
        <option value="frontload">Front Load</option>
        <option value="chimneys">Chimney</option>
        <option value="topload">Top Load</option>
        <option value="geysers">Geysers</option>
        <option value="washingpowders">Washing Powders</option>
        </select>  

    </div>
        </div>
        <div className='flex space-x-2'>
        <div className='col-span-4'>
          <input type="file" className="p-3" onChange={(e)=>handleFileSelect(e)}/>    
        </div>
        </div>
        </div>
        <Button className= 'bg-blue-600 mx-auto text-center my-auto mt-10 text-white w-40  rounded-md py-2 text-lg  '
        onClick={() => handleFormSubmit()}>
          <p className='text-center text-xl'>Submit</p>
        </Button>
      </div>
  </div>
</form>
</div>
  </>   
  )
}



function renderSuccessAlert(productName: any, isProductAdded: any, setIsProductAdded:any) {
  if (isProductAdded === "true") {
    return (
      <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div className="flex">
          <div className="py-1">
            <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
          </div>
          <div>
            <p className="font-bold">Added New Product</p>
            <p className="text-sm">{productName} Added successfully</p>
          </div>
          <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-1" aria-label="Close"
            onClick={() => setIsProductAdded("")}>
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>
    )
  } else if (isProductAdded === "false") {
    return (
      <div className="bg-red-100 border-t-4 border-red-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
        <div className="flex">
          <div className="py-1">
            <svg className="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg>
          </div>
          <div>
            <p className="font-bold">Failed To Add New Product</p>
            <p className="text-sm">{productName} was not added. Please try again</p>
          </div>
          <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-1" aria-label="Close"
            onClick={() => setIsProductAdded("")}>
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
      </div>
    )
  } else {
    return (<></>)
  }
}
export default Addproduct
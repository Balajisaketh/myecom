import React from 'react'
import { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useDebounce } from 'use-debounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Returns() {
    const location = useLocation();
    const [isSearching, setIsSearching] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, 100)
  const history = useNavigate();
    const {state} = location;
    let custId:any[] = [];
    const [orderStatus, setOrderStatus] = useState("");
    const [filteredNames, setFilteredNames] = useState<any>(null);
    const [filterLetter, setFilterLetter] = useState('');
    const [checksearch,setcheck]=useState("")
  
    // if(state.customerId != null){
    // custId = state.customerId
    // }
    const [orders, setOrders] = useState([]);
    const [filteredProds, setFilteredProds] = useState([]);
    useEffect(() => {
        setIsSearching(true);
        filterprods();
        // Perform the search logic here based on debouncedSearchTerm
        // You might want to use this search term to filter the products
        setIsSearching(false);
      }, [debouncedSearchTerm]);
      const handleChange = (e:any) => {
        console.log("i am entered",e.target.value)
         setSearchTerm(e.target.value);
      
         filterprods()
      
       }
      
      const filterprods=()=>{
        setIsSearching(true);
        console.log("eneted here in to filter",searchTerm)
        console.log(orders,"i am resdata");
        if(searchTerm==='')
        {
           setcheck("empty")
          setFilteredProds(orders);
        }
        else{
          setcheck("present")
        const filteredProducts = orders.filter((product:any) =>

          product.id.toLowerCase().includes(debouncedSearchTerm)
        );
        console.log("i am filtered here",filteredProducts);
          setFilteredProds(filteredProducts);
          setIsSearching(false);
       }
      }
    console.log(custId)
    useEffect(() => {
        axios.get("https://srivasishtaenterprises.com/getreturns").then((res)=>{
            console.log(res.data.message.rows,"i am data from returns");
            setOrders(res.data.message.rows)

        }
        ).catch((err)=>{
            console.log("ia m error in customer orders data");

        })
        
        
    },[]);

  return (
    <div className='space-y-10'>
      <h1 className='text-center font-bold text-3xl mx-30'>Return Details</h1>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
        
        <label className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for orderid" onChange={handleChange}/>
        </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
            <th scope="col" className="px-6 py-3">
                    Return id
                </th>
                <th scope="col" className="px-6 py-3">
                   Product name
                </th>
                
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Date
                </th>
                <th scope="col" className="px-6 py-3">
                    product image
                </th>
               
            </tr>
        </thead>
        <tbody>
          {
            isSearching==true ?
            (
              <>
              <FontAwesomeIcon icon={faSpinner}  size='xl'/>
              </>
            )
            : checksearch==='present' ?
          (
            <>
           {
                 filteredProds.map((val:any,index)=>{
                  console.log("i am cheking val data",val)

                  // const formatedDate = new Date(val?.date).toLocaleString(
                  //   'en-IN',
                  //     {
                  //       month: "short",
                  //       day: "2-digit",
                  //       year: "numeric",
                  //     }
                  // );
                  const formatedDate=new Date(val?.return_date).getDate()+"/"+(new Date(val?.return_date).getMonth()+1)+"/"+new Date(val?.return_date).getFullYear()
                   console.log(formatedDate,"in m bey")

                  console.log("i am chein date",formatedDate);

                    return (
                      <>
                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
                    <td scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="pl-3">
                            <div className="text-md">{val.id}</div>
                            
                        </div>  
                       
                    </td>
                    <td className="px-6 py-4">
                    <div className="font-normal text-gray-500">{val.product_name}</div>
                    </td>
                    
                    <td className="px-4 py-4">
                    <div className="font-normal text-gray-500">{val.price}</div>
                    </td>
                    <td className="px-4 py-4">
                    <div className="font-normal text-gray-500">{val.quantity}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                    <div className="font-normal text-gray-500">{formatedDate}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                    <img src={val?.product_url} className='h-20 w-20'/>
                    </td>
                   
                </tr>
                      
                      </>
                    )
                 })
           }
           </>
          ) :(
            <>
            {
                 orders?.map((val:any,index)=>{
                  console.log("i am orderds data",val)
                  // const formatedDate = new Date(val?.date).toLocaleString(
                  //   'en-IN',
                  //     {
                  //       month: "short",
                  //       day: "2-digit",
                  //       year: "numeric",
                  //     }
                  // );
                  const formatedDate=new Date(val?.return_date).getDate()+"/"+(new Date(val?.return_date).getMonth()+1)+"/"+new Date(val?.return_date).getFullYear()
                  console.log(formatedDate,"in m bey")

                 console.log("i am chein date",formatedDate);
                  
                    return (
                      <>
                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
                    <td scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="pl-3">
                            <div className="text-md">{val.id}</div>
                            
                        </div>  
                       
                    </td>
                    <td className="px-4 py-4">
                    <div className="font-normal text-gray-500">{val.product_name}</div>
                    </td>
                    <td className="px-4 py-4">
                    <div className="font-normal text-gray-500">{val.price}</div>
                    </td>
                    <td className="px-4 py-4">
                    <div className="font-normal text-gray-500">{val.quantity}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                    <div className="font-normal text-gray-500">{formatedDate}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-nowrap">
                    <img src={val?.product_url} className='h-20 w-20'/>
                    
                    </td>
                   
                </tr>
                      
                      </>
                    )
                 })
           }
            </>
          )
}
               
        </tbody>
    </table>
</div>


    </div>
    
  )
}


export default Returns
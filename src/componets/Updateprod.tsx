import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { properties } from '../properties'
import Updatemodal from '../modals/updatemodal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '@uidotdev/usehooks';

function Updateprod() {
  
  const [prods,setprods]=useState([])
  const [searchVal, setSearchVal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [debouncedSearchTerm] = useDebounce(searchTerm, 100)
  const [filteredProds, setFilteredProds] = useState([]);
 const[prodid,setprodid]=useState([])
 const [checksearch,setcheck]=useState("")
 const [iddata,setiddata]=useState()
 // API search results
 
 
 const handleChange = (e:any) => {
  console.log("i am entered")
   setSearchTerm(e.target.value.toLowerCase());

   filterprods()

 }
 const filterprods=()=>{
  setIsSearching(true);
  console.log("eneted here in to filter",searchTerm)
  console.log(prods,"i am resdata");
  if(searchTerm==='')
  {
     setcheck("empty")
    setFilteredProds(prods);
  }
  else{
    setcheck("present")
  const filteredProducts = prods.filter((product:any) =>
    product.name.toLowerCase().includes(debouncedSearchTerm)
  );
  console.log("i am filtered here",filteredProducts);
    setFilteredProds(filteredProducts);
    setIsSearching(false);
 }
}
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const fetchdata=()=>{
    axios.get("https://srivasishtaenterprises.com/getproducts").then((res:any)=>{
      console.log(res,"i am oroduct get")
      if(res.status==200)
      {
              // console.log("i am rspns",res.data.rows);
               setprods(res.data.rows)

      }
         
     }).catch((err)=>{
          console.log(err,"i am check error")
     })
  }

const deleteprods=(iddataa:any)=>{
  const url = `https://srivasishtaenterprises.com/deleteproduct/${iddataa}`;
  axios.delete(url).then((res)=>{
    if(res.status==200)
    {
      console.log('Product deleted successfully');
      setprods((prevProducts) => prevProducts.filter((product:any) => product.uid !== iddataa));

    }

  }).catch((err)=>{
    console.log('Product failed to delete',err);
  })
}

  
  const updateprod=({price,name}:any)=>{
    console.log("i am entered to update your data",price,name)
    const url = `https://srivasishtaenterprises.com/updateproduct/${iddata}`;
     // Replace 'products' with your actual API endpoint
  
    const body={
     name:name,
     price:price  
    }
    console.log("i am body",body);
    axios.put(url,body).then((res)=>{
         if(res.status==200)
         {
          // console.log("ia m updatred plz",res.data.rows)
            fetchdata()
         }

    }).catch((err)=>{
      console.log("Update prod error",err)  
         
    })

  }
 

  useEffect(()=>{
         axios.get("https://srivasishtaenterprises.com/getproducts").then((res:any)=>{
          if(res.status==200)
          {
                  console.log("i am rspns",res.data.rows);
                   setprods(res.data.rows)

          }
             
         }).catch((err)=>{
              console.log(err,"i am check error")
         })
  },[])
  useEffect(() => {
    setIsSearching(true);
    filterprods();
    // Perform the search logic here based on debouncedSearchTerm
    // You might want to use this search term to filter the products
    setIsSearching(false);
  }, [debouncedSearchTerm]);
  return (
    
    <div className='space-y-10'>
      <h1 className='text-center font-bold text-3xl mx-30'>Your Products</h1>
      {isModalOpen && (
      <Updatemodal onclose={handleCloseModal} product={prodid} onprodupdate={updateprod}/>
      
    )}
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
        
        <label className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Product name" onChange={handleChange}
            />
        </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" className="px-6 py-3">
                    Product Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Product price
                </th>
                <th scope="col" className="px-6 py-3">
                    Product Image
                </th>
                <th scope="col" className="px-6 py-3">
                    
                </th>
                <th scope="col" className="px-6 py-3">
                    
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

                    return (
                      <>
                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
                    <td scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="pl-3">
                            <div className="text-md">{val.name}</div>
                            
                        </div>  
                       
                    </td>
                    <td className="px-6 py-4">
                    <div className="font-normal text-gray-500">{val.price}</div>
                    </td>
                    
                    <td className="px-6 py-4">
                    <div className="font-normal text-gray-500">
                      <img src={val.imagepath} className='h-10 w-20'/>
                    </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className='border-black text-md text-red'
                      onClick={()=>{
                        handleOpenModal()
                        setprodid(val)
                        setiddata(val?.uid)
                      } }
                      
                      >Update</button>
                    </td>
                    <td className="px-6 py-4">
                    <FontAwesomeIcon icon={faTrash} color='red'  onClick={()=>deleteprods(val?.uid)}/>
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
                 prods?.map((val:any,index)=>{
                  console.log("i am cheking val data",val)

                    return (
                      <>
                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    
                    <td scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                        <div className="pl-3">
                            <div className="text-md">{val.name}</div>
                            
                        </div>  
                       
                    </td>
                    <td className="px-6 py-4">
                    <div className="font-normal text-gray-500">{val.price}</div>
                    </td>
                    
                    <td className="px-6 py-4">
                    <div className="font-normal text-gray-500">
                      <img src={val.imagepath} className='h-10 w-20'/>
                    </div>
                    </td>
                    <td className="px-6 py-4">
                      <button className='border-black text-md text-red'
                      onClick={()=>{
                        handleOpenModal()
                        setprodid(val)
                        setiddata(val?.uid)
                      } }
                      
                      >Update</button>
                    </td>
                    <td className="px-6 py-4">
                    <FontAwesomeIcon icon={faTrash} color='red'  onClick={()=>deleteprods(val?.uid)}/>
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

export default Updateprod
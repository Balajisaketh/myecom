import React from 'react'
import { useState, useEffect } from 'react'
import { getCustomersList} from '../API Calls/AdminAPICalls';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom'
import { properties } from '../properties';
import axios from 'axios';

function Customer() {
    const [customers, setCustomers] = useState<any[]>([]);
    const [searchVal, setSearchVal] = useState('');
    const [status,setstatus]=useState({val:"idle"})
    useEffect(() => {
        getCustomersList(setCustomers);
    });
   
  // API search results
  const [results, setResults] = useState([]);
  // Searching status (whether there is pending API request)
 
  // ... if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing ...
  // ... so that we aren't hitting our API rapidly.
//   const debouncedSearchTerm = useDebounce(searchVal, 2000);
//   console.log("i m debounced search term",debouncedSearchTerm)
//   // Effect for API call
//  useEffect(()=>{
// if(debouncedSearchTerm)
// {
//     console.log("debounced search term here",debouncedSearchTerm);
//     const body={
//         username:debouncedSearchTerm
//     }
//   axios.post(properties.baseURL +properties.searchbyname,body).then((res:any)=>
//   {
//     console.log(res,"i m red data");
//        setstatus({val:"done"});
//        setResults(res.data);
//   }).catch((err)=>
//   {
//     setstatus({val:"error"});
//   })
// }
// else{
//    setstatus({val:"empty"});
// }
//  },[debouncedSearchTerm])
  

// // Hook

// function useDebounce(value:any, delay:any) {
//     console.log("useDebounce",value);
//   // State and setters for debounced value
//   const [debouncedValue, setDebouncedValue] = useState(value);
//   useEffect(
//     () => {
//       // Update debounced value after delay
//       const handler = setTimeout(() => {
//         setDebouncedValue(value);
//       }, delay);
//       // Cancel the timeout if value changes (also on delay change or unmount)
//       // This is how we prevent debounced value from updating if value is changed ...
//       // .. within the delay period. Timeout gets cleared and restarted.
//       return () => {
//         clearTimeout(handler);
//       };
//     },
//     [value, delay] // Only re-call effect if value or delay changes
//   );
//   return debouncedValue;
// }
const apicall = (searchval:any)=>

{
    console.log("nter in apic a")
    const body={
                username:searchVal
            }
    axios.post(properties.baseURL +properties.searchbyname,body).then((res:any)=>
      {
        console.log(res.data,"i m red data");
           setstatus({val:"done"});
           const resdata=res.filter((fildata:any)=>
           {
                return (searchVal && fildata.username.toLowerCase().includes(searchVal.toLowerCase()));
           })
           console.log(resdata,"i m done data");
           setResults(res.data.rows);
           setCustomers(res.data.rows);
      }).catch((err)=>
      {
        setstatus({val:"error"});
      })
}


  return (
    <div className='space-y-10'>
      <h1 className='text-center font-bold text-3xl mx-30'>Customer Details</h1>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div className="flex items-center justify-between pb-4 bg-white dark:bg-gray-900">
        
        <label className="sr-only">Search</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Customers" onChange={(e)=>setSearchVal(e.target.value)} onKeyDown={(e)=>{
                if(e.key==="Enter")
                {
                     apicall(searchVal)
                }
            }}/>
        </div>
    </div>
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
           {

           }

               
        </tbody>
    </table>
</div>


    </div>
    
  )


        }
export default Customer
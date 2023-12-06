import { useState } from "react";
import axios from 'axios';
import { Alert } from 'flowbite-react';
import { useNavigate } from "react-router-dom";
function Login()
{
    const[email,setEmail]=useState(""); 
	const[passw,setPassw]=useState("");
    const [status,setStatus]=useState("");
    const navigate=useNavigate();
    const handlelogin=(e:any)=>
{
  e.preventDefault()
  console.log("hi")
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  console.log("i m db",email,passw);
  if(passw.length==0 || passw==undefined && email.length==0 )
  {
    setStatus("notentered");
  }
  else if(emailRegex.test(email) )
  {
    setStatus("entered");
      axios.post("http://localhost:3001/api/login").then((res:any)=>{
        if(res.message==="Login successful")
        {
             navigate("/home")
        }
        else{
           console.log("error");   
        }

      })
  }

}
 return(

    <>
    
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {
          status =="notentered" ?
           <>
           <div className='bg-red-400 w-[30vw] mx-auto p-3 rounded-md '>
           <Alert color="info">
  <span>
    <p>
      <span className="font-medium text-center">
        Enter your details      
      </span>

    </p>
  </span>
</Alert>
</div>
           </>:
           <>
  
           </>
         
        }
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login  to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST"  encType="multipart/form-data">
            <div>
            <label htmlFor="email" className="block text-sm  text-left font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=>
              {console.log("mail",e.target.value);
                setEmail(e.target.value)}}/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               onChange={(e)=>{
                console.log("pass",e.target.value);
                setPassw(e.target.value)}

               }/>
              </div>
            </div>
            

            <div className='flex space-x-10'>
             
              <button
                type="submit"
                className="flex w-40 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
               onClick={(e)=>handlelogin(e)}>
                Login
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
 )
}
export default Login;
import { faArrowLeft, faArrowRotateBack, faIndianRupee, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";

function Orderdetails(){
    const location = useLocation();
  const { proddetails } = location.state || {};
  
  const navigate=useNavigate()
  const { state } = location;


    // console.log("i am product details",proddetails,state?.custname)

    return (
       <>
       <div className="column border-none   ">
        <p className="font-bold my-1 text-xl">Order details of customer:{state?.custname}</p>
        <div className="absolute left-10">
            <FontAwesomeIcon icon={faArrowLeft}
            onClick={()=>{
navigate("/orders")
            }}
            />
        </div>
       {
        proddetails?.map((val:any,index:any)=>{
            console.log(index,val,"we both r here");
            return (
          <>
           <div className="grid grid-flow-col gap-2 grid-cols-12 mx-auto my-10 cursor-pointer">
          <div className="col-span-3">
          <img
          src={val?.imageUrl}
          alt={val?.productname}
          className="w-full h-[40vh] object-contain rounded-md mx-10"
        />
          </div>
          <div className="col-span-4">
              <h2 className="font-bold  my-[20vh] mx-2">{val?.productname}</h2>
          </div>
           <div className="col-span-2">
             <p className="font-medium my-[20vh]">{val?.quantity}</p>
           </div>

           <div className="col-span-2">
             <p className="font-medium my-[20vh]"><span><FontAwesomeIcon icon={faIndianRupeeSign}/></span>{" "+val?.quantity*val?.price}</p>
           </div>
              
            </div>

          </>
            )
        })
       }
       </div>

       </>


    )

}
export default Orderdetails
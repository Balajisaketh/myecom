import React from 'react'
import { useState, useEffect } from 'react'
import { MDBDataTable, MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { getCustomersList } from '../API Calls/AdminAPICalls';
function Orders_table() {
  const [customers, setCustomers] = useState<any[]>([]);
  useEffect(() => {
      getCustomersList(setCustomers);
  });
  return (
    <div className='leading-10 mx-2 '>
    
    </div>
  )
}

export default Orders_table
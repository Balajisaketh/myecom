import axios from "axios";
import { properties } from "../properties";

export function submitAddProduct(productName:any,  productDescription:any , productPrice:any ,productQuantity:any, category:any, setIsProductAdded:any){
    //console.log("submeted");
    axios.post(properties.baseURL + properties.addProductsURL , {
      body:{
        productname:productName,
        description:productDescription,
        price:productPrice,
        quantity:productQuantity,
        category:category
      }
    }).then((res) => {
      console.log(res)
      if(res.status==200){
        setIsProductAdded("true");
      } else {
        setIsProductAdded("false");
      }
    })
  }

  export function getCustomersList (setCustomers:any) {
    axios.get(properties.baseURL + properties.getCustomerListURL)
    .then((res) => {
        if(res.status==200){
          console.log(res.data,"i m in get users")
            setCustomers(res.data);
        }
    })
  }

export function getOrdersList(custId:any,setOrders:any, orderStatus:any){
  let url = properties.baseURL + properties.getCustomerOrders ;
  if(custId != null)
    url += custId;
  if(orderStatus != null)
    url += orderStatus;

    axios.get(url)
    .then( (res) => {
      if(res.status==200){
          
      }
    })
}
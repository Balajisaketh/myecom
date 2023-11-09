import axios from "axios";
import { properties } from "../properties";
import { useContext } from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { AwsContext } from "../awsauth";
import { FilePath } from "aws-sdk/clients/ecr";


function SubmitAddProduct(
  productName:any,
  productDescription:any,
  productPrice:any,
  category:any,
  setIsProductAdded:any,
  imgpath:String,
  brand:any,
) {
  const prdbdy={
    productname: productName,
    description: productDescription,
    price: productPrice,
    category: category,
    imgpath: imgpath,
    brand:brand
  }


  axios
    .post(properties.baseURL + properties.addProductsURL, prdbdy)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        setIsProductAdded("true");
      } else {
        setIsProductAdded("false");
      }
    });
}
export default SubmitAddProduct;

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
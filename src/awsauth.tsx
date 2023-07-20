import { createContext, useState } from "react";
import AWS from 'aws-sdk';
import { FilePath } from "aws-sdk/clients/transfer";
import { useDispatch } from "react-redux";
import { addimageData } from "./redux/alldata";
export const AwsContext = createContext<any>({});

AWS.config.update({
    accessKeyId: 'AKIAV67O2D4GHUDN4HWC',
    secretAccessKey: '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',
    region: 'ap-south-1',
    signatureVersion: 'v4',
  });
  
  // Create an S3 instance
  const s3 = new AWS.S3();
export const AwscontextProvider = ({ 
    children,
  }: {
    children: React.ReactNode;
  }) => {
const [imgpath,setimgpath] =useState<FilePath>();
const dispatch=useDispatch();
 const uploadtos3=(data:any)=>
 {
    console.log(data,"i m data")
    s3.upload(data, (err:any, data:any) => {
        if (err) {
          console.log('Error uploading file:', err);
        } else {
          console.log('File uploaded successfully:', data.Location);
             dispatch(addimageData({path:data.Location}));

          // Perform any necessary actions with the uploaded file URL
        }
      });
    };
 
   return(
    <AwsContext.Provider
          value={{
           uploadtos3,
           imgpath
          }}
        >
          {children}
        </AwsContext.Provider>
   )
  }
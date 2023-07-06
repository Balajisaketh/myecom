import { createContext } from "react";
import AWS from 'aws-sdk';
export const AwsContext = createContext<any>({});
AWS.config.update({
    accessKeyId: 'AKIAV67O2D4GHUDN4HWC',
    secretAccessKey: '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',
    region: 'ap-south-1',
  });
  
  // Create an S3 instance
  const s3 = new AWS.S3();
export const AwscontextProvider = ({ 
    children,
  }: {
    children: React.ReactNode;
  }) => {
    
 const uploadtos3=(data:any)=>
 {
    console.log(data,"i m data")
    s3.upload(data, (err:any, data:any) => {
        if (err) {
          console.log('Error uploading file:', err);
        } else {
          console.log('File uploaded successfully:', data.Location);
          // Perform any necessary actions with the uploaded file URL
        }
      });
    };
 
   return(
    <AwsContext.Provider
          value={{
           uploadtos3
          }}
        >
          {children}
        </AwsContext.Provider>
   )
  }
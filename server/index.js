import  express  from "express";
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import DefaultData from "./default.js  ";
import Router from "./routes/route.js";
import cors from "cors";
import {v4 as uuid} from 'uuid';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/', Router) 
Connection();
 const PORT=process.env.PORT || 8000;
 
app.listen(PORT,()=> console.log(`server is running Sucessfully ${PORT}`)
) 
// DefaultData(); 

 export let paytmMerchantKey=process.env.PAYTM_MERCHANT_KEY;
 export let paytmParams={};
 paytmParams['MID']=process.env.PAYTM_MID;
 paytmParams['WEBSITE']=process.env.PAYTM_WEBSITE;
 paytmParams['CHANNEL_ID']=process.env.PATYM_CHANNEL_ID;
 paytmParams['INDUSTRY_TYPE_ID']=process.env.PAYTM_INDUSTRY_TYPE_ID;
 paytmParams['ORDER_ID']=uuid();
 paytmParams['CUST_ID']=process.env.PAYTM_CUST_ID;
 paytmParams['TXN_AMOUNT']='100';
//  paytmParams['CALLBACK_URL']='http://localhost:8000/callback';
 paytmParams['EMAIL']='arun@gmail.com';
 paytmParams['MOBILE']='9643606700'

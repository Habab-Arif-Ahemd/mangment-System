import express  from 'express';
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'


const app=express();

app.use(cors());
app.use(cookieParser());
//convert the data into json 
app.use(express.json())

//connection to my sql 

const con =mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"sinup"
    

})
con.connect(function(error)
{if(error)
{
console.log("error in connection",error)
}else console.log("connected")

})
app.post('/login',(req,res)=>{
    const sql="SELECT * FROM users WHERE email = ? AND password = ?";
    con.query(sql,[req.body.email,req.body.password],(error,result)=>{
        if(error){
           return res.json({Status:"error server",Error:" wrong in running "})}
        if(result.length >0) {
           return res.json({Status:"Success"})}
        else {
           return res.json({Status:"error server",Error:" wrong emai or password "})
           
        
        }
    })
})
app.listen(8081,()=>{
    console.log('running')
})
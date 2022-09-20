const { Router } = require('express');
const  express = require('express');
const app=express();
const router=express.Router();

app.get("/",(request,response)=>{
    response.send("<h1>I am  from Home Page</h1>");
    response.end();
})
app.get("/register",(request,response)=>{
    response.statusCode=200
    response.sendFile(__dirname+"./Views/register.html")
    
})
app.get("/admin",(request,response)=>{
  response.statusCode=200
  response.sendFile(__dirname+"./Views/admin.html")
})
app.get("/login",(request,response)=>{
   response.statusCode=200
   response.sendFile(__dirname+"./Views/login.html");
   response.end();
})

app.use("/login",(request,response)=>{
    // response.cookie("name","Rifat");
    // response.cookie("University","University of Sharda");
    // response.cookie("System_Id",2019005005);
    response.clearCookie("id","1300543");
    response.append("id",13000);
    response.end();
})



router.use((request,response)=>{
    response.send("<h1>404 Page </h1>");
    response.end();
})
module.exports=router;
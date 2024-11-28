const express=require("express");
const app =express();
const port=3000;

app.get('/',(req,res) =>{
    res.send("Hello shiva sir, this is from NODE.js project ");
});
 
app.listen(port, () =>{
    console.log(`The app is running on the port :${port}`);
});
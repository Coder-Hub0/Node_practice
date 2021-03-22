const express=require('express')
const app=express() //Initiated

app.get('/',(req,res,next)=>{
	res.send("hello");
})

app.listen(2000)
console.log("2000")

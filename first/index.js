const express=require('express')
const path=require('path')


const app =express()
app.set('views',path.join(__dirname,'views'))

app.set('view engine','mustache')
app.engine('mustache',require('hogan-middleware').__express)


app.get('/string',(req,res,next)=>{

	res.send("hello World")


})
app.get('/json',(req,res,next)=>{
	let data={
	grettings :'hello World'
	}

	res.send(data);

})

app.get('/html',(req,res,next)=>{
	res.render('home',null)
})
app.listen(3000)
console.log('localhost:3000');

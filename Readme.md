# NODE JS/Express


> # Steps 
>  1. Install Node.js and NPM in your system
> 2. Create a folder in which your project files are stored.
>3.  Open that folder in your terminal  and run below command
>> **npm init**
>>>[ this above command helps to   provide a file in which npm configuration of your project. i.e. package.json]
> 4. Adding more dependency in project folder like 
**npm install 'dependency name' --save**.
For this project we need to install express dependency so we stored in our project 
>> **npm install express --save**
>>>[ After this command a folder automatically created that folder name is <bold> node_modules </bold> when we open that folder we able to see some dependency in form of folders alongwith EXPRESS dependency ]
>5. Create a file **index.js**.Its a entry file of the any node.js project.
**touch index.js**

# Index.JS
> ## steps for this file

>> 1. Import  dependency in project so we use that framework in project. **require** is the keyword we use for import any dependency we install in project
>>> const express= require('express')
>>>> express is variable that is constant in nature so we not able to change the variable again

>> 2. Intantiated the dependency
>>> const app=express()

>> 3. **Routing** / **PATHS**
 >> ### RESPONSES
>>> ### GET method with String responses
>>>app.get('/url',(req,res,next)=>{
 *res.send('String')*
})*
>>> ### GET method json as responses
>>>> app.get('/url',(req,res,next)=>{
    *let data={
        gretting:'hello'
    }*
    *res.json(data)*
})
>>> ### GET method HTML(.MUSTACHE) as responses

>>>>for this we need to register views and that views file takes html file but in this project _those html file extension is .mustache_ <br>
>>>> __touch home.mustache__

>>>>> #### Register Views in index.js
>>>>>>const path =require('path') // 2nd line of the file
>>>>>> app.set('views',path.join(__dirname,'views')) // after initialise app variable

>>>>>>> ### Need to install  __HOGAN-middleware__ for render the files Using terminal  
>>>>>>>> npm install hogan-middleware  --save <br>
>>>>>>>> npm install hjs --save


>>>>>> ### Register the extention of file 
>>>>>>>app.set('view engine' ,'mustache') 

>>>>>>  ### Register the dependency
>>>>>>> app.engine('mustache' ,require('hogan-middleware').__express) 

>>>>> #### Start write a code for render the HTML page
>>>>>>app.get('/url',(req,res,next)=>{
    *res.render(home,data=null)*
})

>> 4. Choosing a PORT in which site can run
>>> app.listen(PORT NUMBER)



> # Runnig project
>> * **node index.js** on terminal 




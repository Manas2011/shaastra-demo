const express= require('express');
const app=express();
app.get('/',(req,res)=>{
    const num=Math.random();
    res.send(`Your random number is${num}`);
})
app.listen(3000,()=>{
    console.log('Server is listening on port 3000');
})
const express =require('express');
const app= express();
app.get('/',(req,res)=>{
    // res.send('hello world');
    res.sendFile(__dirname+'/corona2.html');
})
// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+'/style.css')
// })
app.listen(3000,()=>{
    console.log('server is listening in port  3000,http://localhost:3000');
})
// codewars
// java30


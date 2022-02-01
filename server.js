const express = require ('express')
const app = express();
const path = require ('path')
const PORT=5000
var today= new Date()
const myLogger=(req,res,next)=>{
    if(today.getHours()>9||today.getHours()<17||today.getDay()==0||today.getDay()==6)
     res.sendFile((path.join(__dirname,'public','img','closed.gif')))
     else
     next()
    // console.log(today.getDay());
}
app.use(myLogger);

app.use(express.static(path.join(__dirname,'public')))
app.listen(PORT,(err)=>{
    if(err) {throw err}
    else {console.log('SERVER IS UP AND RUNNING....')}
})


const express = require('express')
const app = express()
const port = 3000
const db = require('./config/db.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.get('/person',(req,res)=>{
    db.query('select * from person',(err,data)=>{
        if(!err){
            console.log(data)
            res.send(data)
        }else{
            console.log(err)
        }
    })
})

app.get('/person/:name',(req,res)=>{
    const name = req.params.name
    db.query(`select * from person where name='${name}'`,(err,data)=>{
        if(!err){
            console.log(data)
            res.send(data)
        }else{
            console.log(err)
        }
    })
})


// {"name":"김철수","age":33,"height":177.6}
app.post('/person',(req,res)=>{
    console.log(req.body) // { name: '김철수', age: 33, height: 177.6 }
    //const name = req.body.name
    //const age = req.body.age
    //const height = req.body.height
    const {name,age,height}=req.body
    //비구조화할당, 구조분해할당, destructuring assignment(ES6)
    console.log(name)
    console.log(age)
    console.log(height)
    db.query(`insert into person(name,age,height) values('${name}',${age},${height})`,(err,data)=>{
        if(!err){
            console.log(data)
            res.send(data)//데이터가 아니고 잘 추가됬다!
        }else{
            console.log(err)
        }
    })  
})

// {"name":"이민호","age":35}
app.put('/person',(req,res)=>{
    console.log(req.body) // {"name":"이민호","age":35}
    const {name,age}=req.body
    db.query(`update person set age=${age} where name='${name}'`,(err,data)=>{
        if(!err){
            console.log(data)
            res.send(data)//데이터가 아니고 잘 추가됬다!
        }else{
            console.log(err)
        }
    })  
})

// {"name":"이민호"}
app.delete('/person',(req,res)=>{
    console.log(req.body) // {"name":"이민호"}
    const {name}=req.body
    db.query(`delete from person where name='${name}'`,(err,data)=>{
        if(!err) {
            console.log(data)
            res.send(data)//데이터가 아니고 잘 삭제됬다!
        } else{
            console.log(err)
        }
    })  
})

app.listen(port,()=>{
    console.log(`app ${port} port listening`)
})
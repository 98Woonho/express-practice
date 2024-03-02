// config/db.js = db를 연결해주는 역할

const mysql = require('mysql')

const db = mysql.createPool({
    host : 'localhost', // 호스트(대상)
    user : 'root',
    password : '1234',
    database : 'practice',
    port:3306
})

module.exports=db // 다른 js에서 사용 가능 하도록 db 정보를 보냄
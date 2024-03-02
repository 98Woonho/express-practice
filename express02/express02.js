const express = require('express') // express 모듈 불러오기 / 할당
const app = express() // express 프레임워크 생성
const port = 3000 // 포트번호

const bodyParser = require('body-parser')
app.use(bodyParser.json())

let personList = [{id:1, name:'kim', age:20, height:176.6},
                  {id:2, name:'lee', age:21, height:166.6},
                  {id:3, name:'park', age:22, height:186.6}]


// ?뒤에 붙은 문자열들이 쿼리스트링이다.
// http://localhost:3000/search?word=hello&ie=utf-8
app.get('/search', (req, res) => {
    console.log(req.query) // { word: 'hi', ie: 'utf-8' }
    res.send('search complete!')
})

app.get('/person', (req, res) => {
    res.send(personList)
})

app.get('/person/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let result = '';
    for(i=0; i<personList.length; i++) {
        if(id === personList[i].id) {
            result = personList[i]
        }
    }
    res.send(result)
})

// 추가(회원가입, 차량등록, 학생등록, 글쓰기)
app.post('/person', (req, res) => {
    // POSTMAN body-raw-JSON-{"id":4,"name":"choi","age":23,"height":191.1}
    console.log(req.body) // undifined. why? bodyParser가 되지 않아서
    personList.push(req.body)
    res.send(personList)
})

// 수정
app.put('/person', (req, res) => {
    console.log(req.body)
    const id = parseInt(req.body.id)
    for(i=0; i<personList.length; i++) {
        if(id === personList[i].id) {
            personList[i].age = req.body.age
        }
    }
    res.send(personList)
})

// 삭제
app.delete('/person', (req, res) => {
    console.log(req.body)
    const id = parseInt(req.body.id)
    for(i=0; i<personList.length; i++) {
        if(id === personList[i].id) {
            personList.splice(i, 1)
        }
    }
    res.send(personList)
})

// listen함수로 3000번 포트에서 청취한다.
// 시작 후 대기상태
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
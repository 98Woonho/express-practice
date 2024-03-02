const express = require('express') // express 모듈 불러오기 / 할당
const app = express() // express 프레임워크 생성
const port = 3000 // 포트번호

// get방식 루트 요청 , 콜백함수 실행
// 매개변수에 req에는 request객체, res에는 response 객체
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/bye', (req, res) => {
    res.send('Bye World!')
})

// http://localhost:3000/abc/5 여기서 5가 num에 mapping 되는 것
// :num에서 :는 num이 주소가 아니라 인자라는 것을 의미
app.get('/abc/:num', (req, res) => {
    console.log(req) // req 객체의 정보
    console.log(req.params) // req 내부의 인자 정보 {num: '5'}
    console.log(req.params.num) // 5
    res.send('abc World!')
})

// &로 인자를 구분
app.get('/def/:num1&:num2', (req, res) => {
    console.log(req.params.num1)
    console.log(req.params.num2)
    const num1 = req.params.num1
    const num2 = req.params.num2
    result = num1 + num2
    res.send('def World!')
})

// http://localhost:3000/add/10&20
app.get('/add/:num1&:num2',(req,res)=>{
    console.log(req.params.num1)
    console.log(req.params.num2)
    const num1=req.params.num1
    const num2=req.params.num2
    const result=num1+num2
    res.send(result);
})

// listen함수로 3000번 포트에서 청취한다.
// 시작 후 대기상태
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// terminal에 node [파일명] 입력하면 파일이 실행되고 서버가 구축이 됨.
# Express 기초
프로젝트 구성 후, 터미널에 `node [파일명.js]` 을 입력하면 파일이 실행되고 서버가 구축이 된다.

## '/' 경로
![root-path](https://github.com/98Woonho/express-practice/assets/145889732/9b95ce31-3bbd-4fb1-a893-cd14dd58a664)

## '/bye' 경로
![root-path](https://github.com/98Woonho/express-practice/assets/145889732/e27689b3-9ec5-4d4c-abc2-9fabf39e3eb6)

## '/abc/:num' 경로
![abc-num-path](https://github.com/98Woonho/express-practice/assets/145889732/12868fde-3a70-4ef7-ac8c-6f63a0f646c1)

/abc/5 를 주소창에 입력하면, express에서 <b>req</b>로 받게 되고, <b>req.params</b>를 콘솔에 출력하면 `{num : 5}`이 나온다.\
단 여기서 5는 숫자가 아닌 문자열이다.

## '/def/:num1&num2' 경로
![def-path](https://github.com/98Woonho/express-practice/assets/145889732/8f3a3429-c11b-471d-b201-681b1158bbe9)

/def/3&5 를 주소창에 입력하면, req가 num1 : 3, num2 : 5로 받게 된다.\
마찬가지로 3, 5는 문자열이다.

# Express 기초
프로젝트 구성 후, 터미널에 `node [파일명.js]` 을 입력하면 파일이 실행되고 서버가 구축이 된다.

## '/' 경로
![root-path](https://github.com/98Woonho/express-practice/assets/145889732/9b95ce31-3bbd-4fb1-a893-cd14dd58a664)

## '/bye' 경로
![root-path](https://github.com/98Woonho/express-practice/assets/145889732/e27689b3-9ec5-4d4c-abc2-9fabf39e3eb6)

## '/abc/:num' 경로
![abc-path](https://github.com/98Woonho/express-practice/assets/145889732/b83c4080-4875-4487-a43e-951beae37c54)

/abc/5 를 주소창에 입력하면, express에서 <b>req</b>로 받게 되고, <b>req.params</b>를 콘솔에 출력하면 `{num : 5}`이 나온다.\
단 여기서 5는 숫자가 아닌 문자열이다.

## '/def/:num1&num2' 경로
![def-path](https://github.com/98Woonho/express-practice/assets/145889732/e9214623-769c-4331-9c94-2ff8ca38e90b)

/def/3&5 를 주소창에 입력하면, req가 num1 : 5, num2 : 7로 받게 된다.\
마찬가지로 5, 7는 문자열이다.

## '/add/:num1&num2' 경로
![add-path](https://github.com/98Woonho/express-practice/assets/145889732/9c19f4a2-1308-4213-a13a-3dd6adfa2058)

num1과 num2는 문자열 이므로 num1 + num2를 하면 문자열 연산으로 화면상에 출력된다.

// /*변수선언*/
// //선언적함수
// funcNum();
// function funcNum(){
//   console.log('나는 선언적함수입니다.');
// }
// //악명함수
// let sumFunc =Function(){
//   console.log('나는 익명함수입니다.');
// }
// sumFunc();
// //console.log(typeof(sumFunc))

var repeat = function(){
  alert('나는 익명함수입니다.');
}

function repeat(){
  alert('나는 선언적함수입니다.');
}

repeat();
/*
함수를 호출하면 익명함수가 실행된다.
이유: 호이스팅에 의해서 선언적 함수가 먼저 생성되고
익명함수가 나중에 변수에 할당되기 때문이다.
*/

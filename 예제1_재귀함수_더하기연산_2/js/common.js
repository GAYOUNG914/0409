/*변수선언*/
let total = 0;
/*입력값*/
// let inputText = prompt('정수를 입력해주세요.','숫자');
// inputText = Number(inputText);

function repeat(i){
if( i > 0 ){
  return i * repeat( i - 1 );
  }else{
  return false
  }
}
console.log(repeat(9));

/*변수선언*/
let total = 0;
/*입력값*/
let inputText = prompt('정수를 입력해주세요','숫자');
inputText = Number(inputText);

//function repeat(매개변수,인자,파라미터)
function repeat(i){
  if( i == 0 ){
    console.log( total );
    return false;
  }
  total += i;
  i--;
  repeat(i);
}

repeat(inputText);

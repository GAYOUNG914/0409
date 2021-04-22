/*for구문*/
let outPut = '';

for ( var i = 0; i < 15; i++){
  /*빈공백 채우기*/
  //for 공백 감소
  for( var j = 15; j > i; j--){
    outPut += '^';
  }
  /*별찍기*/
  //for 별 증가
  for( var k = 0; k < 2*i; k++){
    outPut += '*';
  }
  //줄바꿈 /n
    outPut += '\n';
}
console.log(outPut)

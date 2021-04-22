/*for구문*/
let outPut = '';

// for( var i = 0; i < 10; i++){
//   //실행문
//   outPut += '*';
//   console.log(outPut);
//   if( i == 5 ){
//     console.log('여섯번째 입니다.');
//     break;//for 구문에서 빠져나감.
//   }
// }

/*홀수 짝수 구분하여 별찍기*/
for (var i = 1; i < 10; i++) {
  if( i % 2 == 1){//홀수일 때 별찍기
    outPut += '/*';
    console.log(outPut);
  }else if( i % 2 == 0 ){//짝수일 때 별찍기
    outPut += '/**';
    console.log(outPut);
  }
}

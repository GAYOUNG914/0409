/*변수선언*/
let checkNum = 0; // 재고 확인 변수
let arrayFruit = ['사과','배','수박','포도','키위','레몬'];
let inputText = prompt('과일을 주문해주세요.','한글입력');

// console.log(arrayFruit.length);
/*재고확인*/
for (var i = 0; i < arrayFruit.length; i++) {
  console.log(arrayFruit[i]+', 입력값 :'+inputText);
  if( arrayFruit[i] == inputText ){
    checkNum = 1;
    // console.log('재고가 있습니다.');
  }
}

/*상품 구매 및 미입고 안내*/
if( checkNum == 1 ){
  for(var i = 0; i < arrayFruit.length; i++){
    if( arrayFruit[i] == inputText ){
      alert('맛있는 '+inputText+'를 구매하였습니다.');
      break
    }
  }
}else{
  alert(inputText+'은 입고가 되지 않았습니다.');
}

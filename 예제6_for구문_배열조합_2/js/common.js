/*변수선언*/
let checkNum = 0; // 재고 확인 변수
let arrayShop = [['반바지','슬랙스','면바지'],['점퍼','조끼']];
let inputText = prompt('과일을 주문해주세요.','한글입력');
// console.log(arrayShop[0][0])

/*재고 확인*/
for (var i = 0; i < arrayShop.length; i++) {
  for (var j = 0; j < arrayShop[i].length; j++) {
    console.log(arrayShop[i][j]);
    if( arrayShop[i][j] == inputText ){
      checkNum = 1;
      // console.log('재고가 있습니다.');
    }
  }
}

/*상품 구매 및 미입고 안내*/
if ( checkNum == 1 ) {
  for (var i = 0; i < arrayShop.length; i++) {
    for (var j = 0; j < arrayShop[i].length; j++) {
      if( arrayShop[i][j] == inputText ){
        alert(inputText+'를 구매하였습니다.');
      }
    }
  }
}else {
  alert(inputText+'은 품절입니다.');
}

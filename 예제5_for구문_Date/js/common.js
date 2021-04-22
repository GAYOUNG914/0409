/*변수선언*/
let startTime = new Date().getTime();
// console.log(startTime)
/*for구문*/
for (var i = 0; new Date().getTime() < startTime + 1000 ; i++) {
  /*
  실행문 :  시간을 밀리세컨드(천분의 1초)에 한하여
  1초 동안 for구문의 수행 능력 테스트
  */
  console.log(startTime+','+new Date().getTime());
}

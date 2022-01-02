

/**
 * @param {string} s
 * @return {number}
 */
var s = "      -11919730356x";

var myAtoi = function(s) {

  //trim() : 문자열 양 끝의 공백을 제거
  //match() : 문자열이 정규식과 매치되는 부분을 검색
  let res = s.trim().match(/^(\-|\+)?\d+/g);
  
  console.log(res);

  let int = +s;
  //parseInt() : 문자열 인자를 구문분석하여 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환한다
  let int2 = parseInt(s);
  console.log(int2);
  console.log(Math.pow(2, 31) - 1);
  console.log( -11919730356 < -2147483648);
  
  if(!int2) {
    return false 
  } else {
    console.log(int2);
    console.log(-Math.pow(2, 31));
    if ( int2 < -Math.pow(2, 31) ) {
      int2 = -(Math.pow(2, 31)); 
    } else if (int2 > Math.pow(2, 31) - 1 ) {
      int2 = Math.pow(2, 31) - 1;
    } 
    return int2;
    
  }

  
  
     
};

console.log(myAtoi(s));
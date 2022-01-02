// const input = ["H","a","n","n","a","h"];
const input = ["h","e","l","l","o"];

const reversString = (s) => {
  // let left = 0;
  // let right = s.length - 1;
  // while (left < right) {
  //   const tmp = s[left];
  //   s[left++] = s[right];
  //   s[right--] = tmp;
  // }

  // let left = 0;
  // let right = s.length - 1;
  // while (left < right) {
  //   const tmp = s[left];
  //   console.log('s: ', s);
  //   console.log('tmp', tmp)
  //   s[left++] = s[right];
  //   // left++;
  //   console.log('s left++: ', s, left);
  //   s[right--] = tmp;
  //   // right--;
  // }

  if(s.length === 1) return s;
  let p1 = Math.floor(s.length / 2) - 1;
  let p2 = s.length % 2 === 0 ? Math.floor(s.length / 2 ) : Math.floor(s.length / 2) + 1;
  console.log('p1 : ', p1, 'p2', p2);
  while(p1 >= 0) {
    console.log('s[p1]', s[p1], 's[p2]', s[p2]);
    [s[p1], s[p2]] = [s[p2], s[p1]];
    p1--;
    p2++;
  }
  return s;
}

console.log(reversString(input));
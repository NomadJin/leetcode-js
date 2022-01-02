/**
 * @param {string} s
 * @return {boolean}
 */
var s = "A man, a plan, a canal: Panama";

var isPalindrome = function(s) {
   s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
   let left = 0;
   let right = s.length - 1;

   while(left < right) {
    const leftLetter = s[left];
    const rightLetter = s[right];
    console.log('leftLetter: ', leftLetter);
    console.log('rightLetter:', rightLetter);
    if(leftLetter !== rightLetter) return false;
    left++;
    right--;
   }
   return true;
};

console.log(isPalindrome(s));
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var s = "anagram", t = "nagaram";

var isAnagram = function(s, t) {
    // console.log(s, t);
    // const sArr = s.split('');
    // const tArr = t.split('');

    // console.log(sArr.sort());
    // console.log(tArr.sort());
    // const sMap = {};
    // const tMap = {};
    // for(let s of sArr) {
    //   if(sMap[s] == null) sMap[s] = 0;
    //   sMap[s]++;
    // }
    // for(let t of sArr) {
    //   if(tMap[s] == null) tMap[s] = 0;
    //   tMap[s]++;
    // }
    // if (sMap == tMap) return true;
    // return false;
    
    const map = {};
    s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
    t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
    console.log(map);
    return Object.keys(map).every(k => map[k] === 0);
};

console.log(isAnagram(s, t));
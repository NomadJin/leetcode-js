input = 'loveleetcode';

const firstUniqueCharacter = (s) => {
  const map = new Map();
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (!map.has(c)) {
            map.set(c, true);
        } else {
            map.set(c, false);
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) == true) {
            return i;
        }
    }
    
    return -1;
}

console.log(firstUniqueCharacter(input));
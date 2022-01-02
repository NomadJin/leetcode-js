const input = [1, 1, 2];

const removeDuplicate = (nums) => {
  let i = 0;
    for(let j = 1; j < nums.length; j++){
      console.log(`nums[${i}]`, nums[i]);
      console.log('i = ', i);
      console.log(`nums[${j}]`, nums[j]);
      console.log('j = ', j);
        if(nums[i] != nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1;
}

console.log(removeDuplicate(input));
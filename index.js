// Code your solutions in this file
const array = ['Ada', 'Brendan', 'Ali'];
const printBadges = (array) => {
  for(let i = 0; i < array.length; i++) {
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`);
  }
  return array;
};

printBadges(array);


const tailsNeverFails = () => {
  let x = 0;
  while (Math.random() >= 0.5) {
    x++;
  }
  return `You got ${x} tails in a row!`
};

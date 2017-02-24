const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const addNumbers = (sum, numsLeft, completionCallback) => {
  if (numsLeft > 0) {
    rl.question("Enter number: ", answer => {
      sum += parseInt(answer);
      numsLeft -= 1;
      console.log(`Partial Sum: ${sum}`);
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else if (numsLeft === 0) {
    completionCallback(sum);
  }
};
addNumbers(0, 5, sum => console.log(`Total Sum: ${sum}`));

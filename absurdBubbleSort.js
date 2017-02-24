const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askIfGreaterThan = (el1, el2, callback) => {
  rl.question(`Is ${el1} > ${el2}? `, answer => {
    if(answer === 'yes') {
      callback(true);
    } else if(answer === 'no') {
      callback(false);
    }

  });
};


// askIfGreaterThan(5, 6, (x) => console.log(x));

const innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;

        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  } else if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
};

// innerBubbleSortLoop([1,7,2], 0, false, () => console.log("In outer bubble sort"));

const absurdBubbleSort = (arr, sortCompletionCallback) => {
  const outerBubbleSortLoop = madeAnySwaps => {
    if(madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  };

  outerBubbleSortLoop(true);
};

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  rl.close();
});

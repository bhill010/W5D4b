const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor(stacks) {
    this.stacks = stacks;
    this.isValidMove.bind(this);
  }

  promptMove(callback) {
    //console.log(this.stacks);
    JSON.stringify(this.stacks);
    rl.question("Choose a start tower index: ", startTowerIdx => {
      startTowerIdx = parseInt(startTowerIdx);
      rl.question("Choose an end tower index: ", endTowerIdx => {
        endTowerIdx = parseInt(endTowerIdx);
        callback(startTowerIdx, endTowerIdx);
      });
    });
  }

  isValidMove(startTowerIdx, endTowerIdx) {
    if (this.stacks[startTowerIdx].length === 0) {
      return false;
    } else if(this.stacks[endTowerIdx].length === 0) {
      return true;
    } else if(this.stacks[startTowerIdx][this.stacks[startTowerIdx].length - 1] >
              this.stacks[endTowerIdx][0]){
      return false;
    }
    return true;
  }

  move(startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
      console.log(this.stacks);
      return true;
    } else {
      console.log(this.stacks);
      return false;
    }
  }

  isStackEmpty(numStack) {
    if(this.stacks[numStack].length === 0){
      return true;
    }
    return false;
  }

  isWon() {
    if(this.isStackEmpty(0) && (this.isStackEmpty(1) || this.isStackEmpty(2))) {
      return true;
    }
    return false;
  }

  run(completionCallback) {
    let test = this.promptMove(() => {
      this.move.bind(this);
    });
    console.log(test);

    if(test === false) {
      console.log("Error! we couldn't perform the move");
      rl.close();
    }

  }
}



let game = new Game([[3,2,1], [], []]);
game.run(() => console.log("dfsfds"));
// console.log(game.move(0, 1));
// console.log(game.isValidMove(1, 0));

class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    this.printTime();
    setInterval(this._tick.bind(this), 1000);

    // alternative way instead of binding below:

    // setInterval(() => {
    //   this._tick()
    // }, 1000);

  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let time = (`${this.hours}:${this.minutes}:${this.seconds}`);
    console.log(time);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.seconds += 1;

    this.minutes += Math.floor(this.seconds / 60);
    this.hours += Math.floor(this.minutes / 60);
    this.seconds = this.seconds % 60;

    this.printTime();
  }
}

const clock = new Clock();
//setInterval(clock._tick, 1000);

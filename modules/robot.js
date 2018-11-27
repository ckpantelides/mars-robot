module.exports = class Robot {
  constructor ( x, y, direction, outerX, outerY) {
    // the starting position and direction of the robot
    this.x = x;
    this.y = y;
    this.direction = direction;
    // the outer x & y coordinates of Mars
    this.outerX = outerX;
    this.outerY = outerY;
  }
  // function called when journey successfully completed
  position () {
    console.log(`${this.x}${this.y}${this.direction}`);
  }
  // function called when the robot falls off Mars
  lost () {
    console.log(`${this.x}${this.y}${this.direction}LOST`);
  }
}

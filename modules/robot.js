// class Robot {

module.exports = class Robot {
  constructor ( x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }
  position () {
    console.log(`${this.x}${this.y}${this.direction}`);
  }
}

// exports.Robot = Robot;

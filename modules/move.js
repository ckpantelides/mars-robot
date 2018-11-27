var Robot = require('./robot');

module.exports = function move(Robot, str) {

  // cycle through each movement character in the movement command string
  for (var i = 0; i < str.length; i++) {
    // rotate the robot 90 degrees left depending on its current direction
    if (str.charAt(i) === "L") {
      if (Robot.direction === "N") { Robot.direction = "W"; }
      else if (Robot.direction === "W") { Robot.direction = "S"; }
      else if (Robot.direction === "S") { Robot.direction = "E"; }
      else if (Robot.direction === "E") { Robot.direction = "N"; }
    }
    // rotate the robot 90 degrees right depending on its current direction
    else if (str.charAt(i) === "R") {
      if (Robot.direction === "N") { Robot.direction = "E"; }
      else if (Robot.direction === "E") { Robot.direction = "S"; }
      else if (Robot.direction === "S") { Robot.direction = "W"; }
      else if (Robot.direction === "W") { Robot.direction = "N"; }
    }
    // move forward one unit
    else if (str.charAt(i) === "F") {
      if (Robot.direction === "N") {
        Robot.y = parseFloat(Robot.y) + 1;
        // if the robot exceeds the outer boundary, break the movement string
        if (Robot.y > Robot.outerY) {
          Robot.y = (Robot.outerY);
          Robot.lost();
          return;
        }
      }
      // if the robot exceeds the outer boundary, break the movement string
      else if (Robot.direction === "E") {
        Robot.x = parseFloat(Robot.x) + 1;
        if (Robot.x > Robot.outerX) {
          Robot.x = (Robot.outerX);
          Robot.lost();
          return;
        }
      }
      // if the robot exceeds the lower boundary, break the movement string
      else if (Robot.direction === "S") {
        Robot.y = parseFloat(Robot.y) - 1;
        if (Robot.y < 0) {
          Robot.y = 0;
          Robot.lost();
          return;
        }
      }
      // if the robot exceeds the lower boundary, break the movement string
      else if (Robot.direction === "W") {
        Robot.x = parseFloat(Robot.x) - 1;
        if (Robot.x < 0) {
          Robot.x = 0;
          Robot.lost();
          return;
        }
      }
    }
  }
  // print the robot's position if it completes the movement string
  Robot.position();
}

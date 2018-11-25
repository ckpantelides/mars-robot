var Robot = require('./robot');

module.exports = function move(Robot, str) {
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === "L") {
      if (Robot.direction === "N") { Robot.direction = "W"; }
      else if (Robot.direction === "W") { Robot.direction = "S"; }
      else if (Robot.direction === "S") { Robot.direction = "E"; }
      else if (Robot.direction === "E") { Robot.direction = "N"; }
    }
    else if (str.charAt(i) === "R") {
      if (Robot.direction === "N") { Robot.direction = "E"; }
      else if (Robot.direction === "E") { Robot.direction = "S"; }
      else if (Robot.direction === "S") { Robot.direction = "W"; }
      else if (Robot.direction === "W") { Robot.direction = "N"; }
    }
    else if (str.charAt(i) === "F") {
      if (Robot.direction === "N") { Robot.y = parseFloat(Robot.y) + 1; }
      else if (Robot.direction === "E") { Robot.x = parseFloat(Robot.x) + 1; }
      else if (Robot.direction === "S") { Robot.y = parseFloat(Robot.y) - 1; }
      else if (Robot.direction === "W") { Robot.x = parseFloat(Robot.x) - 1; }
    }
  }
//  console.log(`${Robot.x}${Robot.y}${Robot.direction}`);
}

// exports.move = move;

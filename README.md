Mars robot
=================

#### Challenge - model a mars robot that can move across Mars' terrain

* Built with node modules. The CLI is built using [inquirer](https://www.npmjs.com/package/inquirer) 
* Mars is a 2D grid, which we define the size of
* We give the robot has a starting position on the Mars-grid, as well as a starting direction (e.g. N = North, E = East...)
* The robot accepts a string of directions - F to move forward one space, L to turn left 90&#x0970;, R to turn right 90&#x0970;
* The directions string is interpreted by the move.js module

> npm install

> node app.js

> open localhost:3000

> look at your original console

Start by defining the size of Mars. It takes two integers - with no spaces - for the outer x and out y coordinates

![img1]

Next define the robots starting position - two integers for its x and y coordinates, and then N, E, S or W for the direction it's facing

![img2]

The string of directions is a combination of F(orward), L(eft) and R(ight)

![img3]

After it's run through the directions, the robot will log its resting coordinates, and the direction it's facing

![img4]

If it moves outside of Mars' bounds, it will log its final known coordinates, and print "LOST"

![img5]

The robot is constructed from the robot class, which takes Mars' outer coordinates, as well as it's own starting position, as its properties. The robot class also has methods to print its position, and to print whether its lost.

The move module cycles through the string of directions, and updates the properties of the robot object accordingly. It also checks whether the robot has moved out of bounds, calling the lost method if necessary.

[img1]: https://github.com/ckpantelides/mars-robot/blob/assets/images/mars1.png
[img2]: https://github.com/ckpantelides/mars-robot/blob/assets/images/mars2.png
[img3]: https://github.com/ckpantelides/mars-robot/blob/assets/images/mars3.png
[img4]: https://github.com/ckpantelides/mars-robot/blob/assets/images/mars4.png
[img5]: https://github.com/ckpantelides/mars-robot/blob/assets/images/mars5.png

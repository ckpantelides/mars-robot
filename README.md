Mars robot
=================

#### Challenge - model a mars robot that can move across Mars' terrain

* Built with node modules and Express. The CLI is built uses [inquirer](https://www.npmjs.com/package/inquirer) 
* Mars is a 2D grid, which we define the size of
* The robot has a starting position on Mars, as well as starting direction (e.g. N = North)
* The robot accepts a string of directions - F to move forward one space, L to turn left 90 &#x0970, R to turn right 90 &#x0970
* The directions string is interpreted by the move.js module

> npm install

> node app.js

> open localhost:3000

> look at your original console

Start by defining the size of Mars. It takes two integers with no spaces for the outer x and out y coordinates
![img1]

Next define the robots starting position - two integers for its x and y coordinates, and then N, E, S or W for the direction it's facing
![img2]

The string of directions is a combination of F(orward), L(eft) and R(ight)
![img3]

After it's run through the directions, the robot will log its resting coordinates, and the direction it's facing
![img4]

If it moves outside of Mars' bounds, it will log its final known coordinates, and print "LOST"
![img5]

[img1]: https://github.com/ckpantelides/mars-robot/blob/assets/images/mars1.png
[img2]: https://github.com/ckpantelides/mars-robot/blob/assets/images/mars2.png
[img3]: https://github.com/ckpantelides/mars-robot/blob/assets/images/mars3.png
[img4]: https://github.com/ckpantelides/mars-robot/blob/assets/images/mars4.png
[img5]: https://github.com/ckpantelides/mars-robot/blob/assets/images/mars5.png

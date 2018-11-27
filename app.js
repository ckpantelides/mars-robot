const express = require('express');
const bodyParser = require('body-parser');
// const request = require('request');
const app = express();

// make static files available i.e. css
app.use(express.static('public'));

// serves all requests which includes /images in the url from the images folder
app.use('/images', express.static(__dirname + '/Images'));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// require the Robot and move modules
var Robot = require('./modules/robot');
var move = require('./modules/move');

app.get('/', function (req, res) {

  // inquirer module used for command line input
  const inquirer = require('inquirer');

  inquirer.prompt([{
      // request the outer coordinates of Mars (XY)
      name: 'boundary',
      type: 'input',
      message: 'Mars\' outer xy coordinates please',}
      ,{
      // robot starting position eg 00N or 23W etc.
      name: 'start',
      type: 'input',
      message: 'Robot starting position please',}
      ,{
      // movement string for robot, string of L,R or F (e.g. LLFFFRFF)
      name: 'route',
      type: 'input',
      message: 'Directions for robot please',
      }])
  .then((answers) => {
    // create robot object from user input
    var start = answers.start.split("");
    var boundary = answers.boundary.split("");
    let kyri = new Robot (start[0], start[1], start[2], boundary[0], boundary[1]);

    // stringify the direction route provided by the user
    let route = JSON.stringify(answers.route);

    // call move function on robot object using the route provided by the user
    move(kyri, route);
  });

  // retrieve command line arguments (ignoring "node app.js")
  // const args = process.argv.slice(2);

  res.render('index', {title: "Mars Robot", error: null});

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

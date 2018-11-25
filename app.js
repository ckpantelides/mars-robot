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

// inquirer used for command line arguments
// var inquirer = require('inquirer');

app.get('/', function (req, res) {

  const inquirer = require('inquirer');

  inquirer.prompt([{
      name: 'start',
      type: 'input',
      message: 'Robot starting position please',}
      ,{
      name: 'route',
      type: 'input',
      message: 'Directions for robot please',
      }])
  .then((answers) => {

    var start = answers.start.split("");
    let kyri = new Robot (start[0], start[1], start[2]);
    let route = JSON.stringify(answers.route);
    move(kyri, route);
    kyri.position();
  });

  // retrieve command line arguments (ignoring "node app.js")
  // const args = process.argv.slice(2);

  res.render('index', {title: "Mars Robot", error: null});

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

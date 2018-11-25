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

  // retrieve command line arguments (ignoring "node app.js")
  const args = process.argv.slice(2)
//  console.log(args[0]);

  let kyri = new Robot (1,3, "E");

  console.log(kyri);

  move(kyri, args[0]);

  console.log(kyri);
  res.render('index', {title: "Mars Robot", error: null});

})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

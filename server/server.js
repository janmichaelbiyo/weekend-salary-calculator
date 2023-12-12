const express = require('express');
console.log('!!!NODE with EXPRESS!!!');

// initializing app
const app = express();
// console.log(app);

app.use(express.static('server/public'));

// run the app
// function param as a callback
app.listen(5002, () => {
  console.log('Application running on PORT 5001');
});
// ctrl+C = exit


// from the package.json file
// "scripts": {
  //   "test": "jest --verbose"
  // },
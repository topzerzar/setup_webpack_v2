const express = require('express');
const path = require('path');

const app = express();

// app.use('/', express.static('src'));
// app.use(express.static('dist'));

// app.use(express.static(__dirname + '/dist'));

// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;
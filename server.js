var compression = require('compression');
var express = require('express');
// var fs = require('fs');
var app = express();
// var auth = require('basic-auth');

app.use(express.static(__dirname + '/dist'));

// app.use(function(req, res, next) {
//   var user = auth(req);
//
//   if (user === undefined || user['name'] !== 'fnb' || user['pass'] !== process.env.HTTP_PASSWORD) {
//     res.statusCode = 401;
//     res.setHeader('WWW-Authenticate', 'Basic realm="MyRealmName"');
//     res.end('Unauthorized');
//   } else {
//     next();
//   }
// });

// app.get('/', function (req, res)
// {
//   var html = '<ul>';
//
//   fs.readdir(__dirname + '/dist', function(err, files) {
//     files
//       .filter(function(file) { return file.substr(-5) === '.html'; })
//       .forEach(function(file) {
//         html += '<li><a target="_blank" href="' + file + '">' + file + '</a></li>';
//       });
//
//     html += '</ul>';
//
//     res.send(html);
//   });
// });

var server = app.listen(process.env.PORT || 5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
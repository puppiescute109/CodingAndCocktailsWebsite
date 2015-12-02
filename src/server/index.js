var express = require('express');
var app = express();
var favicon = require('serve-favicon');

export default {
   start: (dir) => {
      app.use(favicon(dir + '/public/favicon.ico'));
      app.use('/assets', express.static('./public/assets'));
      console.log('good to go')
      var server = app.listen(3000, function () {
         var host = server.address().address;
         var port = server.address().port;
      });

      app.get('*', function(req, res) {
         res.sendFile(dir + '/public/index.html');
      });

   }
}
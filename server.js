const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/agenda-ui'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/agenda-ui/index.html');
});

app.listen(process.env.port || 4200);

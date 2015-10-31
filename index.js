var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/descripcion', function(request, response) {
  response.render('pages/descripcion');
});
app.get('/videos', function(request, response) {
  response.render('pages/videos');
});
app.get('/actividades', function(request, response) {
  response.render('pages/actividades');
});
app.get('/documentos', function(request, response) {
  response.render('pages/documentos');
});
app.get('/enlaces', function(request, response) {
  response.render('pages/enlaces');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

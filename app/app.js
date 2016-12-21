var express = require('express');

var app = express();

// You can load data like this.
var dataFile = require('./data/data.json');
app.set('appData', dataFile);

app.use(express.static('app/public'));

// You can specify port too.
app.set('port', process.env.PORT || 3000);

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));

var server = app.listen(app.get('port'), function() {
	console.log("Listening on port " + app.get('port'));
});



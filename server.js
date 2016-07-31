var express = require('express'),
	app = express();

// ENVIRONMENT CONFIG
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;
var router = router = express.Router();

// EXPRESS CONFIG
app.use(express.static(__dirname));

// ROUTES

router.get('/*', function(req, res) {
	res.sendFile('index.html');
});

// Start server
app.listen(port, function(){
  console.log('Server listening on port ' + port)
});
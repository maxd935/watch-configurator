const express = require('express')
const PORT = process.env.PORT || 5000
const watch_options = require('./options.json')
const path = require('path');
const buildPath = path.join(__dirname, '..', 'build');

var app = express();

app
	.get('/watch_options', (req,res) => {
		res.status(200).json(watch_options);
	})
	.use(express.static(buildPath))
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))

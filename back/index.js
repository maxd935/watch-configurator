const express = require('express')
const app = express()
const watch_options = require('../options.json')

app.get('/watch_options', (req,res) => {
    res.status(200).json(watch_options);
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute");
})
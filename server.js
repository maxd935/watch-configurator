const express = require('express')
const PORT = process.env.PORT || 5000
const watch_options = require('./options.json')

express()
    .get('/',
        (req, res) =>
            res.send('hello maxime')
    )
    .get('/watch_options', (req,res) => {
        res.status(200).json(watch_options);
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
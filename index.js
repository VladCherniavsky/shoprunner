const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = process.env.PORT || 4000;

app.get('/shoprunner', (req, res, next) => {
    console.log('req.query', req.query)
    req.query.srtoken
        ? res.cookie('sr_token', req.query.srtoken)
        : res.clearCookie('sr_token');

    return res.json('все ок');
});

app.listen(port, () => {
    console.log(`Listen port ${port}`)
});
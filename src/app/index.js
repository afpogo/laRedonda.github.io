process.env = require('../../.env')(process.env.NODE_ENV || 'development');
const port = process.env.PORT || 9000;
const express = require('express');
// const { readShort } = require('pdfkit/js/data');

let indexRutes = require('../routes/index');

const main = async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({extend: false}));
    app.use('/',indexRutes);
    app.use('*', (req, res) => res.status(404).send('Not Found.'));
    app.listen(`App now running${port}`);
}
main();
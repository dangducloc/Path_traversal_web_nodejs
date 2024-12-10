const express = require('express');

const routes = require('./Router/index');

app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const name = 'Path_travelsal';
    const info = 'this website have path_travelsal vulnerability'
    res.send({
        name,
        info
    })
});


app.use("/", routes);


app.listen(4000, '0.0.0.0', () => {
    console.log('Running on: http://localhost:4000/');
});
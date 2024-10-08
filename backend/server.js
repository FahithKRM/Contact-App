const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.get('/', (req, res) => {
    res.send("Success");
})


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is started on http://localhost:${PORT}`);
});
const express = require('express');

const app = express();


app.use(express.json({ extend: false }));

// Define Routes
app.use('/', require('./routes/index'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server Running and Listening at Port ${PORT}`));
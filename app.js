const express = require('express');

const app = express();

// app.path("public", express.static("public"));
app.use('/', express.static('public'))

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})
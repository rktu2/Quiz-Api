require('dotenv/config');
const express = require('express');
const app = express();

const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})
const express = require('express');
const bodyParser = require('body-parser');
const accountRoutes = require('./routes/accountRoutes');


const app = express();
app.use(bodyParser.json());


app.use('/api/accounts', accountRoutes);

//this is the listen method which is used to call the server post
app.listen(3000, () => {
console.log('Server running on http://localhost:3000');
});

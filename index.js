const express = require('express');
const app = express();
const port = 9000;

//mw
app.use(express.json());
// app.use(express.bodyParser());

//route

app.use(require('./routes/api'));


//set
app.set('port', process.env.port || port);


//open server
app.listen(app.get('port'), () => {
    console.log(`iniciado en puerto: ${port}`);
});
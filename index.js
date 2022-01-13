const express = require ('express');
const bodyParser = require ('body-parser');
const apiRouter = require ('./rutas/api');
const app = express ();
require ('./db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended: true})); //con estas dos lineas puedo recibir peticiones//

app.use('/api', apiRouter)

app.listen (3000, () => {
    console.log ('servidor arrancando!');
});

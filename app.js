const express = require("express");

const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));


const routeMain = require('./routes/main');

app.use('/',routeMain);


const routeHeroes = require('./routes/heroes');

app.use('/heroes',routeHeroes);


// Ruta... ¿Pára qué sirve esto?
app.get('*', (req, res) => {
    res.status(404).send('404 not found. <br> ¡Houston, poseemos problemas!');
});

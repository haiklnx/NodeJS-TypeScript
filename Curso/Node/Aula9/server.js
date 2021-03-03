// utilizando routers do express
const express = require('express');
const { response } = require('express');
const routes = require('./routes');
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(routes);

app.listen(3333, () => console.log('Server online'));
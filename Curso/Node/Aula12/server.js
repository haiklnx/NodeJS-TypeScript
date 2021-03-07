// utilizando routers do express
const express = require('express');
const { response } = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(routes);

app.listen(3333, () => console.log('Server online: http://localhost:3333'));


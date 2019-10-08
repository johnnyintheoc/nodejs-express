// https://github.com/johnnyintheoc/NodeJS-web-server

const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const routes = require('./routes/handlers.js');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(methodOverride("_method"));

// express handlebars config
app.engine("hbs", hbs({
    defaultLayout: "main",
    extname: "hbs",
    helpers: require('./config/hbs-helpers.js'),
    partialsDir: __dirname  + "/views/partials/"
}));
app.set("view engine", "hbs");

app.use('/', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});

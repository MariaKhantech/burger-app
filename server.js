const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
//burger controller
const routes = require('./controllers/burger_controllers');

require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//set handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// once the route directory has been required, app.use takes two arguments, the path fragment and the directory that will be used after hitting that portion of the route.  In this case, if the user hits the base url, express will then look to the index file in the routes directory to direct traffic beyond that base url.
app.use(routes);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));

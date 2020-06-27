const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

require('dotenv').config();

const PORT = process.env.PORT || 8080;
//set handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//burger controller
const routes = require('./controllers/burger_controllers');

// by requiring the whole routes folder, we are able to de-couple the server.js file from the routing, allowing us to make modifications to our routing structure without having to modify our server.js file.  When requiring an entire directory, you must put an index.js file in the root of that directory to instruct express how to direct requests further up the routing tree.
const routes = require('./routes');

// once the route directory has been required, app.use takes two arguments, the path fragment and the directory that will be used after hitting that portion of the route.  In this case, if the user hits the base url, express will then look to the index file in the routes directory to direct traffic beyond that base url.
app.use('/', routes);

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));

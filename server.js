const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes');
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3000;

// Set up session middleware
app.use(
  session({
    secret: "Super secret secret",
    resave: false,
    saveUninitialized: false,
  })
);

const hbs = exphbs.create({ });

// Set up Handlebars.js engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Parse incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(routes);


// Start the server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
  });

});

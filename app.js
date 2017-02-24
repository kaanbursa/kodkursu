const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database')

// const index = require('./routes/index');
const users = require('./routes/users');

// connect to database
mongoose.connect(config.database);

// on connection
mongoose.connection.on('connected', () => {
	console.log('connected to database' + config.database)
});

// on error
mongoose.connection.on('error', (err) =>{
	console.log('Database Error' + err)
});

// initialize app
const app = express();

// my port
const port = 3000;

// CORS Middleware
app.use(cors());

// Route to index page
app.get('/', (req, res) => {
	res.send('Invalid endpoint');
});

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));

// Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


app.use('/users', users);




app.listen(port, () =>{
	console.log('server started on '+ port)
});

module.exports = app;

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
const courses = require('./routes/courses');
const contents = require('./routes/contents');

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



// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);




app.use('/users', users);
app.use('/courses', courses);
app.use('/contents', contents);


// Route to index page
app.get('/', (req, res) => {
	res.send('Invalid endpoint');
});

app.get('*', (req, res)=>{
	res.sendFile(path.join(__dirname, + 'public/index.html'))
})

app.listen(port, () =>{
	console.log('server started on '+ port)
});

module.exports = app;

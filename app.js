// Load express
const express = require('express');

// Load handlebars
const exphbs = require('express-handlebars');

// Instantiate express
const app = express();

// Configure Express to use Handlebars
app.engine(
    'hbs',
    exphbs.engine({
        extname: '.hbs',
        defaultLayout: 'default',
        layoutsDir: 'views/layouts',
        partialsDir: 'views/partials'
    })
);

// Set the view engine
app.set('view engine', 'hbs');

// Tell Express where the views are
app.set('views', 'views');

// Tell Express where static files are
app.use(express.static('public'));


// ========================
// HOME
// ========================

app.get('/', (req, res) => {

    const state = {
        home: true
    };

    const head = {
        title: 'Home - Week 1'
    };

    res.render('index', {
        state,
        head
    });

    console.log('home');
});


// ========================
// CONTACT
// ========================

app.get('/contact', (req, res) => {

    const state = {
        contact: true
    };

    const head = {
        title: 'Contact - Week 1'
    };

    res.render('contact', {
        state,
        head
    });

    console.log('contact');
});


// ========================
// ABOUT
// ========================

app.get('/about', (req, res) => {

    const state = {
        about: true
    };

    const head = {
        title: 'About Us'
    };

    res.render('about', {
        state,
        head
    });

    console.log('about');
});


// ========================
// START SERVER
// ========================

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

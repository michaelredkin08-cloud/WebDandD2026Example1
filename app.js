// Load Express
const express = require('express');

// Load Handlebars
const exphbs = require('express-handlebars');

// Instantiate Express
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


// Set Handlebars as the view engine
app.set('view engine', 'hbs');


// Where to find the views
app.set('views', 'views');


// Static files
app.use(express.static('public'));


// Home page
app.get('/', (req, res) => {

    const state = {
        home: true
    };

    const head = {
        title: 'Home - Clash Royale University Club'
    };

    res.render('index', {
        state,
        head
    });

    console.log('home');
});

// About page
app.get('/about', (req, res) => {

    const state = {
        about: true
    };

    const head = {
        title: 'About Us - Clash Royale University Club'
    };

    res.render('about', {
        state,
        head
    });

    console.log('about');
});


// Contact page
app.get('/contact', (req, res) => {

    const state = {
        contact: true
    };

    const head = {
        title: 'Contact / Join - Clash Royale University Club'
    };

    res.render('contact', {
        state,
        head
    });

    console.log('contact');
});


// Adding the responsive page for this weeks task 
app.get('/responsiveexample', (req, res) => {
    res.render('responsiveexample', {
        head: { title: 'Responsive Example' },
        state: { responsiveexample: true }
    });
});

















// Memberships page
app.get('/memberships', (req, res) => {

    const state = {
        memberships: true
    };

    const head = {
        title: 'Memberships - Clash Royale University Club'
    };

    res.render('memberships', {
        state,
        head
    });

    console.log('memberships');
});




// Start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
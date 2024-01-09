// Create web server

var express = require('express');
var app = express();

// Set view engine
app.set('view engine', 'jade');

// Set path to views
app.set('views', './views');

// Set path to static files
app.use(express.static('./public'));

// Set port to listen to
app.listen(3000);

// Set route to home page
app.get('/', function(req, res) {
    res.render('index');
});

// Set route to comments page
app.get('/comments', function(req, res) {
    // Get data from database
    var comments = [{ name: 'John', date: '10/10/2010', comment: 'This is a comment.' },
        { name: 'Jane', date: '11/11/2011', comment: 'This is another comment.' },
        { name: 'Joe', date: '12/12/2012', comment: 'This is yet another comment.' }
    ];
    res.render('comments', { comments: comments });
});

// Set route to new comment page
app.get('/newcomment', function(req, res) {
    res.render('newcomment');
});

// Set route to post comment page
app.get('/postcomment', function(req, res) {
    // Get data from form
    var name = req.query.name;
    var date = req.query.date;
    var comment = req.query.comment;

    // Insert data into database

    // Redirect to comments page
    res.redirect('/comments');
});
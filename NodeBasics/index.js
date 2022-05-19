const express = require('express');
const path = require('path');
const redditData = require('./data.json')

const app = express();

// public directories:
    // normal css:
    // app.use(express.static(path.join(__dirname, '/public')))

    // boostrap:
    app.use(express.static(path.join(__dirname, '/public2')))

// ustawianie ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


// home dir
app.get('/', (req, res) => {
    const {name} = req.params;
    res.render('home', {name})
})

// search dir. Trzeba tu podac 
app.get('/s/:subreddit', (req, res) => {
    const {subreddit} = req.params;
    const data = redditData[subreddit]

    if(!data) {
        res.render('NotFound', {subreddit})
    } else {
        res.render('subreddit', {
            name: data.name,
            description: data.description,
            ...data
        })
    }
})

//cats directpry
app.get('/cats', (req, res) => {
    const {name} = req.params;
    const cats = [
        'Blue', 'Rocket', 'Monty', 
        'Stephanie', 'Windston'
    ]
    
    res.render('cats', {cats, name})
})

// random number dircectory
app.get('/rand', (req, res) => {
    const {name} = req.params;
    const num = Math.floor(Math.random() * 10) + 1
    res.render('rand', {
        rand: num,
        name
    })
})


// odpalemnie serwera na porcie 3000
app.listen(3000, () => {
    console.log('listening on port 3000');
})
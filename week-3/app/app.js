const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static('public'))

app.set('view engine', 'pug');

app.get('/',(req,res) => {
    res.render('index');
});

app.get('/getData',(req,res) => {
    const { number } = req.query;
    const info = '';
    if (number === null || number === 'xyz'){
        res.send('<h2>Wrong Parameter</h2>');    
    }
    else if (number > 0 ){
        let result = 0;
        for(i=1;i<=number;i++){
            result += i;
        };
        
        res.send(`<h2>${result}</h2>`);
    }
    res.render('getData');
});





app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
  });

  app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
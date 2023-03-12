require('dotenv').config();

const express = require('express')
const hbs = require('hbs');


const app = express()
const port = process.env.PORT;

//handlebars
//TODO requiere('hbs')
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


//poner en public los contenido
//servir contenido estático
app.use( express.static('public') );

//?controladores
app.get('/',(req, res) =>{
    res.render('home',{
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/generic',(req, res) =>{
    res.render('generic',{
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/elements',(req, res) =>{
    res.render('elements',{
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});



app.get('/elements',(req, res) =>{
    res.sendFile(__dirname +'/public/elements.html')
});

//comodín para  los errores
app.get('*',  (req, res) =>{
    res.sendFile(__dirname +'/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


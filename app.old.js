

const http = require('http');


http.createServer((req,res) =>{



    // res.writeHead(200,{ 'Content-Type':'application/json' });

    res.write('Hola Mundo');
    res.end();


    res.end();
})


.listen(8080);


console.log('Escuchando el puerto',8080);


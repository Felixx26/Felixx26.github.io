const express = require('express');
const app = express();
const morgan = require('morgan');
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.set('json spaces', 2)


//routes
app.use(require('./routes/index'))
app.use('/api/categorias', require('./routes/categorias'))


//starting the server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
})
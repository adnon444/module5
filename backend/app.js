const express = require('express')
const app = express()
const port = 3050

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');



// map all routes to the express app

const calculatorRoutes = require('./routes/calculatorRoute');

app.use('/calculator', calculatorRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    

// export the app
module.exports = app;
const swaggerAutogen = require('swagger-autogen')();

const doc={
    info:{
        title: 'my API',
        description: 'Collects and displays contact information'
    },
    host:'localhost:3000',
    schemes: ['http']
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile,endpointsFiles, doc);
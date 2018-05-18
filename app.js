const express = require('express');
const formidable = require('express-formidable');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const usersStore = require('./users');

const swaggerDocument = YAML.load('./swagger.yaml');

const API_PORT = 3000;

const app = express();

app.use(formidable());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

console.log(
  `Node app running on port ${API_PORT} & Doc available at http://localhost:${API_PORT}/api-docs`
);
app.listen(API_PORT);

const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const usersStore = require('./users');

const API_PORT = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

console.log(
  `Node app running on port ${API_PORT} (http://localhost:${API_PORT}`
);
console.log(`Doc available at http://localhost:${API_PORT}/api-docs`);
app.listen(API_PORT);

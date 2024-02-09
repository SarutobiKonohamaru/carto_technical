const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const app = express();

const analysisController = require('./interfaces/controllers/analysisController');

app.use(express.json());
app.use('/api', analysisController());

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
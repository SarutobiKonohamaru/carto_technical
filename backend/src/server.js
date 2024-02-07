const express = require('express');
const app = express();

const dispenserController = require('./interfaces/controllers/dispenserController');

app.use(express.json());
app.use('/api', dispenserController());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
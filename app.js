require('dotenv').config();
require('express-async-errors');
const express = require('express');

const app = express();

app.use(express.json());


// main route
app.get('/', (req, res) => {
  res.send('jobs api');
});

const port = process.env.PORT || 8000;

const start = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listining on port ${port}...`)
    })
  } catch (error) {
    console.log('error', error)
  }
}

start()

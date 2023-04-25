require('dotenv').config();
require('express-async-errors');
const express = require('express');
const connectDB = require('./database/connect');

const furnitureRouter = require('./routes/furniture')

const app = express();

app.use(express.json());


// main route
app.get('/', (req, res) => {
  res.send('jobs api');
});

// route
app.use('/api/v1/furniture', furnitureRouter)


const port = process.env.PORT || 8000;


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`Server is listining on port ${port}...`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()

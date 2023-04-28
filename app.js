require('dotenv').config();
require('express-async-errors');
const express = require('express');
const connectDB = require('./database/connect');
const bodyParser = require('body-parser');
const multer  = require('multer')
const cors = require('cors')
const furnitureRouter = require('./routes/furniture');
const notFoundMiddleware = require('./routes/middleware/not-found');
const errorHandlerMiddleware = require('./routes/middleware/error-handler');

const DIR = './public/';

const app = express();
// const upload = multer({ dest: 'uploads/' })

app.use(express.json());
// app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use('/public', express.static('public'));

// SET STORAGE
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, DIR);
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, Date.now() + '-' + fileName)
  }
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
  }

})
// main route
app.get('/', (req, res) => {
  res.send('jobs api');
});

// route
app.use('/api/v1/furniture', upload.single('image'), furnitureRouter)
app.use('/api/v1/upload', upload.single('image'))


app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)



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

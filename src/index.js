require('dotenv').config()


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');




//routes
const ItemsRoutes = require('./routes/item_router');
const Customer = require('./routes/customer_router')
const Sales = require('./routes/sales_router');
// const EventRoute = require('./routes/event_routes');
// const EventUser = require('./routes/event_regiter_routes')
// const RegisterUsers = require('./routes/register_routes');
// // const userRoutes = require('./models/use')
// const Donations = require('./routes/donate_routes');
// const adDonation = require('./routes/adsDonate_routes');
// const authRoutes=require('./routes/auth_routes')
// const cookieParser = require('cookie-parser');
// const { requireAuth } = require('./middleware/auth');


const app = express();

// middleware

// app.use(cookieParser());
app.use(express.json());


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



//middleware


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})





app.use('/items', ItemsRoutes);
app.use('/customer', Customer);
app.use('/sales', Sales);


// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  })
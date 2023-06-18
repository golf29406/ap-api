const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.use(bodyParser.json({ limit: '1000mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '1000mb' }));

const dataRouter = require('./routes/data');
const paymentRouter = require('./routes/payment');

app.use('/data', dataRouter);
app.use('/payment', paymentRouter)

app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});

module.exports = app;

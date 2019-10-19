const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const port = process.env.PORT || 3000;
const DBpass = process.env.DATABASE_PASSWORD;
const DB = process.env.DATABASE.replace('<PASSWORD>', DBpass);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connection to database succeful.'))
  .catch(err => console.error(err));

app.listen(port, () => {
  console.log(`Running on port ${port}...`);
});

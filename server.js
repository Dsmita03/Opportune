import mongoose from 'mongoose';
import dotenv from 'dotenv'
import chalk from 'chalk'

dotenv.config({ path: './.env' });
import app from './app.js';


// Connect to Mongo // &ssl=true
mongoose
  .connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`DB connection ${chalk.greenBright('successful!')}`))
  .catch(err => console.log(chalk.redBright(err)));

const port = process.env.PORT || 8001;
app.listen(port, () =>
  console.log(`App running on port ${chalk.greenBright(port)}...`)
);

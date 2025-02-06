const cors = require('cors');
const express = require('express');
const { errors } = require('celebrate');
const api = require('./api');
const responseHandler = require('./middleware/responseHandler');

const PORT = process.env.PORT || 8080;

async function launch() {
  const app = express();

  app.use(cors({ origin: true }));
  app.use(express.json());
  app.use(responseHandler);
  app.use('/api', api);
  app.use(errors());

  app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
  });
}

launch();

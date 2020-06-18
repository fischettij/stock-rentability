require('dotenv').config();
const routeList   = require('express-routes-catalogue');
const app    = require('./src/server');

const port = process.env.SERVER_PORT || 9004;

app.listen(port, () => {
  console.info('Server running on port %d', port);
  if (process.env.NODE_ENV === 'development') {
    routeList.default.terminal(app);
  }
});

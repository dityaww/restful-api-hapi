/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const Hapi = require('@hapi/hapi');
const routes = require('./route');
require('dotenv').config();

const init = async () => {
  const server = Hapi.server({
    port: process.env.NODE_PORT,
    host: process.env.NODE_HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);

//   console.log(process.env.NODE_PORT);
};

init();

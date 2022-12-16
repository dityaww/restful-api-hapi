/* eslint-disable linebreak-style */
const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    // option: {
    //   cors: {
    //     origin: ['*'],
    //   },
    // },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
    // option: {
    //   cors: {
    //     origin: ['*'],
    //   },
    // },
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
];

module.exports = routes;

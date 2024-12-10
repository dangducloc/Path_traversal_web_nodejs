const express = require('express');

const routes = express.Router();

const endpoint = require('../Controller/index');

routes.get('/', endpoint.index)
routes.get("/Pictures", endpoint.imgs_sec);
routes.get("/Pictures/:file", endpoint.imgs_unsec);
module.exports = routes;
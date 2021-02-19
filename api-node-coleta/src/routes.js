"use strict";
exports.__esModule = true;
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var multer_1 = require("multer");
var multer_2 = require("./config/multer");
var LocationsController_1 = require("./controllers/LocationsController");
var ItemsController_1 = require("./controllers/ItemsController");
var routes = express_1.Router();
var upload = multer_1["default"](multer_2["default"]);
var itemsController = new ItemsController_1["default"]();
var locationsController = new LocationsController_1["default"]();
routes.get('/items', itemsController.index);
routes.get('/locations/:id', locationsController.show);
routes.get('/locations', locationsController.index);
routes.post('/locations', upload.single('image'), celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required().email(),
        whatsapp: celebrate_1.Joi.number().required(),
        latitude: celebrate_1.Joi.number().required(),
        longitude: celebrate_1.Joi.number().required(),
        city: celebrate_1.Joi.string().required(),
        uf: celebrate_1.Joi.string().required().max(2),
        items: celebrate_1.Joi.string().required()
    })
}, {
    abortEarly: false
}), locationsController.create);
exports["default"] = routes;

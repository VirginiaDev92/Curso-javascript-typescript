"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var path_1 = require("path");
var routes_1 = require("./routes");
var celebrate_1 = require("celebrate");
var env_1 = require("./config/env");
var app = express_1["default"]();
app.use(cors_1["default"]());
app.use(express_1["default"].json());
app.use(routes_1["default"]);
app.use('/uploads', express_1["default"].static(path_1["default"].resolve(__dirname, '..', 'uploads')));
app.use(celebrate_1.errors());
app.listen(env_1["default"].port, function () {
    console.log("Server started on port " + env_1["default"].port + "! \uD83D\uDE0E");
});

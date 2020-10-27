"use strict";

const express = require("express"),
    bodyParser = require("body-parser"),
    cors = require("cors"),
    session = require("express-session"),
    app = express();

try {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(
        cors({
            origin: "*",
        })
    );
    app.use(
        session({
            secret: "REPLACE-WITH-COOL-TEXT",
            resave: false,
            saveUninitialized: true,
        })
    );
} catch (err) {
    console.log(err);
}

module.exports = app;

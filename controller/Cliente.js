"use strict";

const Cliente = require("../model/Cliente");
const DefaultController = require("./Default");

class ClienteController extends DefaultController {
    constructor() {
        super(Cliente);
    }
}

module.exports = new ClienteController();

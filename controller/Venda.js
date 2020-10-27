"use strict";

const Venda = require("../model/Venda");
const DefaultController = require("./Default");

class VendaController extends DefaultController {
    constructor() {
        super(Venda);
    }
}

module.exports = new VendaController();

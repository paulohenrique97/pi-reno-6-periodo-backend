"use strict";

const Vendedor = require("../model/Vendedor");
const DefaultController = require("./Default");

class VendedorController extends DefaultController {
    constructor() {
        super(Vendedor);
    }
}

module.exports = new VendedorController();

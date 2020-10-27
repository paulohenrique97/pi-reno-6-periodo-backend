"use strict";

const Fornecedor = require("../model/Fornecedor");
const DefaultController = require("./Default");

class FornecedorController extends DefaultController {
    constructor() {
        super(Fornecedor);
    }
}

module.exports = new FornecedorController();

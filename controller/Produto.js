"use strict";

const Produto = require("../model/Produto");
const DefaultController = require("./Default");

class ProdutoController extends DefaultController {
    constructor() {
        super(Produto);
    }
}

module.exports = new ProdutoController();

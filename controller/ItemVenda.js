"use strict";

const ItemVenda = require("../model/ItemVenda");
const DefaultController = require("./Default");

class ItemVendaController extends DefaultController {
    constructor() {
        super(ItemVenda);
    }
}

module.exports = new ItemVendaController();

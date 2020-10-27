"use strict";

const controller = require("../controller/ItemVenda");

module.exports = (app) => {
    app.get("/api/itens-venda/:id", controller.get);
    app.get("/api/itens-venda", controller.get);
    // app.post("/api/itens-venda", controller.post);
    // app.delete("/api/itens-venda/:id", controller.delete);
    // app.put("/api/itens-venda/:id", controller.put);
};

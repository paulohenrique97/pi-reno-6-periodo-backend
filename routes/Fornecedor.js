"use strict";

const controller = require("../controller/Fornecedor");

module.exports = (app) => {
    app.get("/api/fornecedores/:id", controller.get);
    app.get("/api/fornecedores", controller.get);
    // app.post("/api/fornecedores", controller.post);
    // app.delete("/api/fornecedores/:id", controller.delete);
    // app.put("/api/fornecedores/:id", controller.put);
};

"use strict";

const util = require("../model/util"),
    { Model } = require("sequelize"),
    { request, response } = require("express");

class DefaultController {
    /**
     *
     * @param { typeof Model } model
     */
    constructor(model) {
        /**
         *
         * @param {typeof request} req Requisição do Cliente
         * @param {typeof response} res Resposta do Servidor
         */
        this.get = (req, res) => {
            try {
                let id = req.params.id,
                    query = req.query || {},
                    where = util.validateQueryFields(model, query),
                    scope = query.scope ? query.scope.split(",") : "defaultScope";

                if (id) {
                    model
                        .scope(scope)
                        .findByPk(id)
                        .then((data) => {
                            if (!data) {
                                res.status(404).end();
                                return;
                            }
                            res.status(200).json(data);
                        })
                        .catch((error) => {
                            res.status(500).json(error);
                        });
                    return;
                }
                model
                    .scope(scope)
                    .findAll({
                        where: where,
                        limit: query.limit ? parseInt(query.limit) : null,
                        offset: query.offset ? parseInt(query.offset) : null,
                    })
                    .then((data) => {
                        if (!data) {
                            res.status(404).end();
                            return;
                        }
                        let registers = {
                            count: 0,
                            rows: data,
                        };
                        model
                            .count({
                                where: where,
                            })
                            .then((count) => {
                                registers.count = count;
                                res.status(200).json(registers);
                                return;
                            })
                            .catch((error) => {
                                res.status(500).json(error);
                            });
                    })
                    .catch((error) => {
                        res.status(500).json(error);
                    });
            } catch (error) {
                res.status(500).json(error);
            }
        };

        /**
         *
         * @param {typeof request} req Requisição do Cliente
         * @param {typeof response} res Resposta do Servidor
         */
        this.post = (req, res) => {
            try {
                let body = req.body;

                model
                    .create(body)
                    .then(() => {
                        res.status(201).end();
                    })
                    .catch((error) => {
                        res.status(500).json(error);
                    });
            } catch (error) {
                res.status(500).json(error);
            }
        };

        /**
         *
         * @param {typeof request} req Requisição do Cliente
         * @param {typeof response} res Resposta do Servidor
         */
        this.put = (req, res) => {
            try {
                let id = req.params.id,
                    body = req.body;

                model
                    .update(body, {
                        where: {
                            id: id,
                        },
                    })
                    .then(() => {
                        res.status(200).end();
                    })
                    .catch((error) => {
                        res.status(500).json(error);
                    });
            } catch (error) {
                res.status(500).json(error);
            }
        };

        /**
         *
         * @param {typeof request} req Requisição do Cliente
         * @param {typeof response} res Resposta do Servidor
         */
        this.delete = (req, res) => {
            try {
                let id = req.params.id,
                    body = {
                        deletado: "*",
                    };

                model
                    .update(body, {
                        where: {
                            id: id,
                        },
                    })
                    .then(() => {
                        res.status(200).end();
                    })
                    .catch((error) => {
                        res.status(500).json(error);
                    });
            } catch (error) {
                res.status(500).json(error);
            }
        };
    }
}

module.exports = DefaultController;

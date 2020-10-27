"use strict";

const { Op, Model, DataTypes } = require("sequelize");

module.exports = {
    /**
     *
     * @param { typeof Model } model
     * @param { Object } query
     */
    validateQueryFields: function (model, query) {
        let where = {};
        for (const field in query) {
            if (model.rawAttributes[field] && model.rawAttributes[field].type.key === DataTypes.STRING.key) {
                where[field] = { [Op.like]: `%${query[field].toLowerCase()}%` };
            } else if (model.rawAttributes[field]) {
                where[field] = query[field];
            }
        }
        return where;
    },
};

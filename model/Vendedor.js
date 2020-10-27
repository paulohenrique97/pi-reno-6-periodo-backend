"use strict";

const { DataTypes } = require("sequelize"),
    sequelize = require("./sequelize");

const Vendedor = sequelize.define(
    "Z23990",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: "R_E_C_N_O_",
        },
        deletado: {
            type: DataTypes.STRING(1),
            defaultValue: " ",
            allowNull: false,
            field: "D_E_L_E_T_",
        },
        codigo: {
            type: DataTypes.STRING(5),
            allowNull: false,
            unique: true,
            field: "Z23_CODIGO",
        },
        filial: {
            type: DataTypes.STRING(2),
            allowNull: false,
            field: "Z23_FILIAL",
        },
        nome: {
            type: DataTypes.STRING(30),
            allowNull: false,
            field: "Z23_NOME",
        },
        cpf: {
            type: DataTypes.STRING(14),
            allowNull: false,
            field: "Z23_CFP",
        },
        status: {
            type: DataTypes.STRING(1),
            allowNull: false,
            field: "Z23_STATUS",
        },
    },
    {
        timestamps: false,
        defaultScope: {
            where: {
                deletado: " ",
            },
            attributes: {
                exclude: ["deletado"],
            },
        },
    }
);

module.exports = Vendedor;

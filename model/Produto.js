"use strict";

const { DataTypes } = require("sequelize"),
    sequelize = require("./sequelize");

const Produto = sequelize.define(
    "Z19990",
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
            field: "Z19_CODIGO",
        },
        filial: {
            type: DataTypes.STRING(2),
            allowNull: false,
            field: "Z19_FILIAL",
        },
        nome: {
            type: DataTypes.STRING(40),
            allowNull: false,
            field: "Z19_PRODUT",
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false,
            field: "Z19_VALOR",
        },
        medida: {
            type: DataTypes.STRING(3),
            allowNull: false,
            field: "Z19_MEDIDA",
        },
        quantidade: {
            type: DataTypes.FLOAT,
            allowNull: false,
            field: "Z19_QUANTI",
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

module.exports = Produto;

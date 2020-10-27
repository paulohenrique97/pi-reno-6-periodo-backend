"use strict";

const { DataTypes } = require("sequelize"),
    sequelize = require("./sequelize");

const Cliente = sequelize.define(
    "Z17990",
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
            type: DataTypes.STRING(6),
            allowNull: false,
            unique: true,
            field: "Z17_CODIGO",
        },
        filial: {
            type: DataTypes.STRING(2),
            allowNull: false,
            field: "Z17_FILIAL",
        },
        nome: {
            type: DataTypes.STRING(60),
            allowNull: false,
            field: "Z17_NOME",
        },
        data: {
            type: DataTypes.STRING(8),
            allowNull: false,
            field: "Z17_DATA",
        },
        endereco: {
            type: DataTypes.STRING(60),
            allowNull: false,
            field: "Z17_ENDE",
        },
        municipio: {
            type: DataTypes.STRING(10),
            allowNull: false,
            field: "Z17_MUN",
        },
        estado: {
            type: DataTypes.STRING(2),
            allowNull: false,
            field: "Z17_UF",
        },
        bitmap: {
            type: DataTypes.STRING(20),
            allowNull: false,
            field: "Z17_BITMAP",
        },
        cpf: {
            type: DataTypes.STRING(14),
            allowNull: false,
            field: "Z17_CPF",
        },
        status: {
            type: DataTypes.STRING(1),
            allowNull: false,
            field: "Z17_STATUS",
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

module.exports = Cliente;

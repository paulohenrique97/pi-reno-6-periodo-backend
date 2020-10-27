"use strict";

const { DataTypes } = require("sequelize"),
    sequelize = require("./sequelize");

const Fornecedor = sequelize.define(
    "Z18990",
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
            field: "Z18_CODIGO",
        },
        filial: {
            type: DataTypes.STRING(2),
            allowNull: false,
            field: "Z18_FILIAL",
        },
        nome: {
            type: DataTypes.STRING(60),
            allowNull: false,
            field: "Z18_NOME",
        },
        endereco: {
            type: DataTypes.STRING(40),
            allowNull: false,
            field: "Z18_ENDERE",
        },
        numero: {
            type: DataTypes.STRING(9),
            allowNull: false,
            field: "Z18_NUMERO",
        },
        municipio: {
            type: DataTypes.STRING(30),
            allowNull: false,
            field: "Z18_MUNICI",
        },
        cep: {
            type: DataTypes.STRING(14),
            allowNull: false,
            field: "Z18_CEP",
        },
        estado: {
            type: DataTypes.STRING(2),
            allowNull: false,
            field: "Z18_ESTADO",
        },
        telefone: {
            type: DataTypes.STRING(9),
            allowNull: false,
            field: "Z18_TELEFO",
        },
        razao: {
            type: DataTypes.STRING(14),
            allowNull: false,
            field: "Z18_RAZAO",
        },
        cnpj: {
            type: DataTypes.STRING(14),
            allowNull: false,
            field: "Z18_CNPJ",
        },
        status: {
            type: DataTypes.STRING(1),
            allowNull: false,
            field: "Z18_STATUS",
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

module.exports = Fornecedor;

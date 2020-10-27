"use strict";

const { DataTypes } = require("sequelize"),
    sequelize = require("./sequelize"),
    Produto = require("./Produto"),
    Venda = require("./Venda");

const ItemVenda = sequelize.define(
    "Z21990",
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
        filial: {
            type: DataTypes.STRING(2),
            allowNull: false,
            field: "Z21_FILIAL",
        },
        codigoProduto: {
            type: DataTypes.STRING(6),
            allowNull: false,
            references: {
                model: Produto,
                key: "codigo",
            },
            field: "Z21_CODPRO",
        },
        codigoVenda: {
            type: DataTypes.STRING(6),
            allowNull: false,
            references: {
                model: Venda,
                key: "codigo",
            },
            field: "Z21_CODVEN",
        },
        descricao: {
            type: DataTypes.STRING(60),
            allowNull: false,
            field: "Z21_DESCRI",
        },
        medida: {
            type: DataTypes.STRING(6),
            allowNull: false,
            field: "Z21_UNIMED",
        },
        quantidade: {
            type: DataTypes.FLOAT,
            allowNull: false,
            field: "Z21_QTD",
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false,
            field: "Z21_VALUNI",
        },
        valorTotal: {
            type: DataTypes.FLOAT,
            allowNull: false,
            field: "Z21_VALTOT",
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

/**
 * Relações
 */

//Venda tem muitos Itens
Venda.hasMany(ItemVenda, {
    as: "ItemVenda",
    foreignKey: "codigoVenda",
    sourceKey: "codigo",
});

//Produto tem muitos Itens
Produto.hasMany(ItemVenda, {
    as: "ItemVenda",
    foreignKey: "codigoProduto",
    sourceKey: "codigo",
});

//Item pertence a uma Venda
ItemVenda.belongsTo(Venda, {
    as: "Venda",
    foreignKey: "codigoVenda",
    targetKey: "codigo",
});

//Item pertence a um Produto
ItemVenda.belongsTo(Produto, {
    as: "Produto",
    foreignKey: "codigoProduto",
    targetKey: "codigo",
});

/**
 * Escopos
 */

Produto.addScope("itens", {
    where: {
        deletado: " ",
    },
    attributes: {
        exclude: ["deletado"],
    },
    include: [
        {
            model: ItemVenda,
            as: "ItemVenda",
            required: false,
        },
    ],
});

Venda.addScope("itens", {
    where: {
        deletado: " ",
    },
    attributes: {
        exclude: ["deletado"],
    },
    include: [
        {
            model: ItemVenda,
            as: "ItemVenda",
            required: false,
        },
    ],
});

ItemVenda.addScope("produto", {
    where: {
        deletado: " ",
    },
    attributes: {
        exclude: ["deletado"],
    },
    include: [
        {
            model: Produto,
            as: "Produto",
            required: false,
        },
    ],
});

ItemVenda.addScope("venda", {
    where: {
        deletado: " ",
    },
    attributes: {
        exclude: ["deletado"],
    },
    include: [
        {
            model: Venda,
            as: "Venda",
            required: false,
        },
    ],
});

module.exports = ItemVenda;

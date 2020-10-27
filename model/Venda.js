"use strict";

const { DataTypes } = require("sequelize"),
    sequelize = require("./sequelize"),
    Vendedor = require("./Vendedor"),
    Cliente = require("./Cliente");

const Venda = sequelize.define(
    "Z20990",
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
            field: "Z20_CODIGO",
        },
        filial: {
            type: DataTypes.STRING(2),
            allowNull: false,
            field: "Z20_FILIAL",
        },
        emissao: {
            type: DataTypes.STRING(8),
            allowNull: false,
            field: "Z20_EMISSA",
        },
        horaVenda: {
            type: DataTypes.STRING(5),
            allowNull: false,
            field: "Z20_HORAVE",
        },
        pagamento: {
            type: DataTypes.STRING(1),
            allowNull: false,
            field: "Z20_PAGAME",
        },
        codigoVendedor: {
            type: DataTypes.STRING(5),
            allowNull: false,
            references: {
                model: Vendedor,
                key: "codigo",
            },
            field: "Z20_CODVEN",
        },
        codigoCliente: {
            type: DataTypes.STRING(6),
            allowNull: false,
            references: {
                model: Cliente,
                key: "codigo",
            },
            field: "Z20_CLIENT",
        },
        nomeVendedor: {
            type: DataTypes.STRING(25),
            allowNull: false,
            field: "Z20_NMVEND",
        },
        nomeCliente: {
            type: DataTypes.STRING(25),
            allowNull: false,
            field: "Z20_NMCLI",
        },
        descricao: {
            type: DataTypes.STRING(8),
            allowNull: false,
            field: "Z20_DESC",
        },
        valorTotal: {
            type: DataTypes.STRING(8),
            allowNull: false,
            field: "Z20_VALTOT",
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

//Cliente tem muitas Vendas
Cliente.hasMany(Venda, {
    as: "Vendas",
    foreignKey: "codigoCliente",
    sourceKey: "codigo",
});

//Vendedor tem muitas Vendas
Vendedor.hasMany(Venda, {
    as: "Vendas",
    foreignKey: "codigoVendedor",
    sourceKey: "codigo",
});

//Venda pertence a um Cliente
Venda.belongsTo(Cliente, {
    as: "Cliente",
    foreignKey: "codigoCliente",
    targetKey: "codigo",
});

//Venda pertence a um Vendedor
Venda.belongsTo(Vendedor, {
    as: "Vendedor",
    foreignKey: "codigoVendedor",
    targetKey: "codigo",
});

/**
 * Escopos
 */

Cliente.addScope("vendas", {
    where: {
        deletado: " ",
    },
    attributes: {
        exclude: ["deletado"],
    },
    include: [
        {
            model: Venda,
            as: "Vendas",
            required: false,
        },
    ],
});

Vendedor.addScope("vendas", {
    where: {
        deletado: " ",
    },
    attributes: {
        exclude: ["deletado"],
    },
    include: [
        {
            model: Venda,
            as: "Vendas",
            required: false,
        },
    ],
});

Venda.addScope("clientes", {
    where: {
        deletado: " ",
    },
    attributes: {
        exclude: ["deletado"],
    },
    include: [
        {
            model: Cliente,
            as: "Cliente",
            required: false,
        },
    ],
});

Venda.addScope("vendedores", {
    where: {
        deletado: " ",
    },
    attributes: {
        exclude: ["deletado"],
    },
    include: [
        {
            model: Vendedor,
            as: "Vendedor",
            required: false,
        },
    ],
});

module.exports = Venda;

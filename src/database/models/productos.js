module.exports = (sequelize, dataTypes) => {
  let alias = "Productos";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: dataTypes.STRING,
      allowNull: false
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: dataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: dataTypes.STRING,
      allowNull: false
    },
    elaborationDate: {
      type: dataTypes.STRING,
      allowNull: false
    },
    expirationDate: {
      type: dataTypes.STRING,
      allowNull: false
    },
    price: {
      type: dataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    idDiscount: {
      type: dataTypes.INTEGER,
      references: {
        model: "Descuentos",
        key: "idDiscount"
      }
    },
    idBrand: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Marcas",
        key: "idBrand"
      }
    }
  };
  let config = {
    tableName: "products",
    timestamps: false,
  };
  const Productos = sequelize.define(alias, cols, config);

  Productos.associate = (models) => {
    Productos.belongsToMany(models.Usuarios, {
      as: "paraUsuarios",
      through: "CarritoProductos",
      foreignKey: "product_id",
      otherKey: "user_id",
      timestamps: false
    })
  }

  return Productos;
};

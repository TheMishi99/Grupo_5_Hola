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
      type: dataTypes.DATE,
      allowNull: false
    },
    expirationDate: {
      type: dataTypes.DATE,
      allowNull: false
    },
    price: {
      type: dataTypes.DECIMAL(10,2),
      allowNull: false,
    },
    category_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Categorias",
        key: "id"
      },
    },
    discount_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Descuentos",
        key: "id"
      },
    },
    brand_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Marcas",
        key: "id"
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
      as: "forUsers",
      through: "CarritoProductos",
      foreignKey: "product_id",
      otherKey: "user_id",
      timestamps: false
    })
    Productos.belongsTo(models.Descuentos, {
      as: "discount",
      foreignKey: "discount_id"
    })
    Productos.belongsTo(models.Marcas, {
      as: "brand",
      foreignKey: "brand_id"
    })
  }

  return Productos;
};

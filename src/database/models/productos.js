module.exports = (sequelize, dataTypes) => {
  let alias = "Productos";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    code: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: dataTypes.STRING,
    },
    title: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    brand: {
      type: dataTypes.STRING,
    },
    info: {
      type: dataTypes.INTEGER,
    },
    weight: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    off: {
      type: dataTypes.STRING,
    },
    description: {
      type: dataTypes.STRING,
    },
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

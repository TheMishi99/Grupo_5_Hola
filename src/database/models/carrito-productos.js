module.exports = (sequelize, dataTypes) => {
  let alias = "CarritoProductos";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
          model: "Usuarios",
          key: "id"
      }
    },
    product_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
      references: {
          model: "Productos",
          key: "id"
      }
    },
    paymentMethod:{
      type:dataTypes.STRING,
      allowNull: false
    },
    total:{
      type:dataTypes.FLOAT,
      allowNull: false
    },
    yesDelivery:{
      type:dataTypes.BOOLEAN,
      allowNull: false
    }
  };
  let config = {
    tableName: "product_cart",
    timestamps: false,
  };
  const CarritoProductos = sequelize.define(alias, cols, config);

  CarritoProductos.associate = (models) => {
    CarritoProductos.belongsTo(models.Usuarios, {
      as: "usuario",
      foreignKey: "user_id"
    })
    CarritoProductos.belongsTo(models.Productos, {
      as: "producto",
      foreignKey: "product_id"
    })
  }

  return CarritoProductos;
};

module.exports = (sequelize, dataTypes) => {
    let alias = "Descuentos";
    let cols = {
      idDiscount: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quantity: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: dataTypes.STRING,
        allowNull: false
      }
    };
    let config = {
      tableName: "discounts",
      timestamps: false,
    };
    const Descuentos = sequelize.define(alias, cols, config);
  
    Descuentos.associate = (models) => {
      Descuentos.hasMany(models.Productos, {
        as: "descuentos",
        foreignKey: "idDiscount",
      })
    }
  
    return Descuentos;
};
  
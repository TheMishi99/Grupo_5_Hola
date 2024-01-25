module.exports = (sequelize, dataTypes) => {
    let alias = "Marcas";
    let cols = {
      idBrand: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: dataTypes.STRING,
        allowNull: false
      }
    };
    let config = {
      tableName: "brands",
      timestamps: false,
    };
    const Marcas = sequelize.define(alias, cols, config);
  
    Marcas.associate = (models) => {
      Marcas.hasMany(models.Productos, {
        as: "marcas",
        foreignKey: "idBrand",
      })
    }
  
    return Marcas;
};
  
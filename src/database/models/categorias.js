module.exports = (sequelize, dataTypes) => {
    let alias = "Categorias";
    let cols = {
      idCategory: {
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
      tableName: "categories",
      timestamps: false,
    };
    const Categorias = sequelize.define(alias, cols, config);
  
    Categorias.associate = (models) => {
      Categorias.hasMany(models.Productos, {
        as: "categorias",
        foreignKey: "idCategory",
      })
    }
  
    return Categorias;
};
  
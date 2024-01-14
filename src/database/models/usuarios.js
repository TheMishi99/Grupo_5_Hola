module.exports = (sequelize, dataTypes) => {
  let alias = "Usuarios";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    confirmPassword: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: dataTypes.INTEGER,
    },
    profilePicture: {
      type: dataTypes.STRING,
    },
  };
  let config = {
    tableName: "users",
    timestamps: false,
  };
  const Usuario = sequelize.define(alias, cols, config);

  return Usuario;
};

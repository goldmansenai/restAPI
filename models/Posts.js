module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define("Posts", {
    tituloPost: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    textoPost: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  });
  return Posts;
};

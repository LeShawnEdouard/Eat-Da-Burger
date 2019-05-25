// The burger has a burger_name attribute with a STRING as the DataType

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    })
  return Burger;
};                           
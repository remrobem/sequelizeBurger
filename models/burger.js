module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  // Burger.associate = function(models) {
  //   // We're saying that a Burger should belong to an Author
  //   // A Burger can't be created without an Author due to the foreign key constraint
  //   Burger.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Burger;
};



// let orm = require("../config/orm.js");

// // object containing functions to execute the defined orm's
// var burger = {
//   selectAll: function (callback) {
//     orm.selectAll("burgers", function (ormResponse) {
//       callback(ormResponse);
//     });
//   },
//   // The variables cols and vals are arrays.
//   createBurger: function (columns, values, callback) {
//     orm.insertOne("burgers", columns, values, function (ormResponse) {
//       callback(ormResponse);
//     });
//   },

//   devourBurger: function (columnValue, condition, callback) {
//     orm.update("burgers", columnValue, condition, function (ormResponse) {
//       callback(ormResponse);
//     });
//   },
// };

// // Export the database functions for the controller (catsController.js).
// module.exports = burger;
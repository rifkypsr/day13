'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AddProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AddProject.init({
    inputProjectName: DataTypes.STRING,
    inputDescription: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    technologies: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AddProject',
  });
  return AddProject;
};
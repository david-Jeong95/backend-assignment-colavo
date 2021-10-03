"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class requestbody extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  requestbody.init(
    {
      start_day_identifier: DataTypes.STRING,
      timezone_identifier: DataTypes.STRING,
      service_duration: DataTypes.NUMBER,
      days: DataTypes.NUMBER,
      timeslot_interval: DataTypes.NUMBER,
      is_ignore_schedule: DataTypes.BOOLEAN,
      is_ignore_workhour: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "requestbody",
    }
  );
  return requestbody;
};

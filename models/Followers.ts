import { Sequelize, DataTypes } from 'sequelize';

export default (sequelize: Sequelize) => {
  const Followers = sequelize.define('followers', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      // allowNull: false
    }
  }, { timestamps: false });

  return Followers;
};

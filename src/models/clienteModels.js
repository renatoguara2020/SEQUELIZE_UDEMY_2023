import { Sequelize } from "sequelize";
import db from "../../sequelizeDB";

export default db.define("client", {
  id: {
    type: Sequelize.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: { 
    type: Sequelize.STRING, 
    allowNull:false,
},
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});
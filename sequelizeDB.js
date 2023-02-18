
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    //passar os dados para o sequelize
    dialect: "mysql", //informar o tipo de banco que vamos utilizar
    host: dbHost, //o host, neste caso estamos com um banco local
  });
  
  

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


  export default sequelize; //exportar
const Sequelize = require('sequelize');

const FilmModel = require('./model/films');
const UserModel = require ('./model/users');

var sequelize = new Sequelize('prueba', 'root', "", {
    host: 'localhost', //la pagina de donde sacamos la BD//
    dialect: 'mysql'
});
const Film = FilmModel(sequelize, Sequelize);
const User=UserModel(sequelize,Sequelize);
sequelize.sync({ force: false })
    .then(() => {
        console.log('tabla sincronizada')
    });

module.exports = {
    Film,
    User
}


/*var sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },*/
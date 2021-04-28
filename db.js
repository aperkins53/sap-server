const Sequelize = require('sequelize');
const sequelize = new Sequelize('sap-server', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function(){
        console.log('Connected to sap-server database');
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;
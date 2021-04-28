module.exports = (sequelize, DataTypes) => {
    const Part = sequelize.define('part', {
        partName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        carYear: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        carMake: {
            type: DataTypes.STRING,
            allowNull: false
        },
        carModel: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Part;
}
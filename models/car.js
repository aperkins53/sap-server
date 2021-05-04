module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('car', {
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        make: {
            type: DataTypes.STRING,
            allowNull: false
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mileage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        vin: {
            type: DataTypes.STRING,
            allowNull: true
        },
        ownerId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        img: {
            type: DataTypes.BLOB,
            allowNull: true
        }
    })
    return Car;
}
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
        exteriorColor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        interiorColor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        transmission: {
            type: DataTypes.STRING,
            allowNull: false
        },
        drivetrain: {
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
        price: {
            type: DataTypes.STRING,
            allowNull: false
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
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Car;
}
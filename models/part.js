module.exports = (sequelize, DataTypes) => {
    const Part = sequelize.define('part', {
        partName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        grade: {
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
        },
        img: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Part;
}
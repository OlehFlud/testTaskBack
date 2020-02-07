module.exports = (sequelize,DataTypes) =>{
    const Feed = sequelize.define('Feed', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,

        },


    },{
        tableName: 'feeds',
        timestamps: false
    });


    return Feed;

};

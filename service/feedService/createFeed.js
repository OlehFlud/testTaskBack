const dataBase = require('../../dataBase').getInstance();

module.exports = async registerData  => {
    const RoomModel = dataBase.getModel('Feed');
    const createRoom = await RoomModel.create(registerData );
    return createRoom && createRoom.dataValues;
};

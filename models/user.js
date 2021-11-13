module.exports = (sequelize, Sequelize) => {
    const userModel = sequelize.define("user", {
        username: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.INTEGER
        }

    });

    return userModel;
};
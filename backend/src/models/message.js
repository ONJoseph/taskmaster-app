module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      message: { type: DataTypes.TEXT, allowNull: false },
    });
  
    return Message;
  };
  
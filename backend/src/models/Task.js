const { Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING },
    status: { type: DataTypes.ENUM('pending', 'completed'), defaultValue: 'pending' },
    priority: { type: DataTypes.ENUM('low', 'medium', 'high') },
    deadline: { type: DataTypes.DATE },
  });

  Task.associate = (models) => {
    Task.belongsTo(models.User, { foreignKey: 'userId' });
  };

  // Fetch tasks with pagination, search, and filter
  Task.getTasks = async (search = '', filter = '', page = 1, limit = 10) => {
    const offset = (page - 1) * limit;
    const where = {
      [Op.and]: [
        { title: { [Op.iLike]: `%${search}%` } },
        { status: filter || { [Op.ne]: null } },
      ],
    };
    return Task.findAndCountAll({ where, limit, offset });
  };

  return Task;
};

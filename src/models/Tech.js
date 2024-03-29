const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize,
      tableName: "tech"
    })
  }

  static associate(models) {
    this.belongsToMany(
      models.User,
      { foreignKey: 'tech_id', through: 'user_tech', as: 'users' }
    )
  }
}

module.exports = Tech;

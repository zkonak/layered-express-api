import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class ServiceDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                name: DataTypes.STRING,
                localisation: DataTypes.STRING,
                specialite:DataTypes.STRING
            }, {sequelize, modelName: 'Service'}
        );
    }
    static associate(models) {
         // define association here
       // this.hasMany(models.Book, {as: 'books'})
        return this;
    }
};

ServiceDao.init(db.sequelize);

export default ServiceDao;
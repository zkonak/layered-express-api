import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class DoctorDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                email: DataTypes.STRING,
                password: DataTypes.STRING,
                name:DataTypes.STRING
            }, {sequelize, modelName: 'Doctor'}
        );
    }
    static associate(models) {
         // define association here
       // this.hasMany(models.Book, {as: 'books'})
        return this;
    }
};

DoctorDao.init(db.sequelize);

export default DoctorDao;
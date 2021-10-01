import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class PatientDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                email: DataTypes.STRING,
                password: DataTypes.STRING,
                name:DataTypes.STRING
                
            }, {sequelize, modelName: 'Patient'}
        );
    }
    static associate(models) {
         // define association here
          this.belongsTo(models.Service);
        return this;
    }
};

PatientDao.init(db.sequelize);

export default PatientDao;
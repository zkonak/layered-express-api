import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class ConsultationDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                
            }, {sequelize, modelName: 'Consultation'}
        );
    }
    static associate(models) {
         // define association here
         this.belongsTo(models.Doctor);
         this.belongsTo(models.Patient);
        return this;
    }
};

ConsultationDao.init(db.sequelize);

export default ConsultationDao;
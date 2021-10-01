import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class PrescriptionDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                dosage:DataTypes.STRING
            }, {sequelize, modelName: 'Prescription'}
        );
    }
    static associate(models) {
         // define association here
         this.belongsTo(models.Consultation);
         this.belongsTo(models.Drug);
        return this;
    }
};

PrescriptionDao.init(db.sequelize);

export default PrescriptionDao;
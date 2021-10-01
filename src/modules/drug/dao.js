import {Model, DataTypes} from 'sequelize';
import db from '../../config/database';

class DrugDao extends Model {
    static init(sequelize) {
        return super.init(
            {
                
                name:DataTypes.STRING
                
            }, {sequelize, modelName: 'Drug'}
        );
    }
    static associate(models) {
         // define association here
          
        return this;
    }
};

DrugDao.init(db.sequelize);

export default DrugDao;
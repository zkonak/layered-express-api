import bcrypt from 'bcrypt';
class PatientRepository {

    constructor(patientDao) {
        this.patientDAO = patientDao;
    }

    async findAll() {
        return await this.patientDAO.findAll();
    }

    async create(patientEntity) {
        const salt = bcrypt.genSaltSync(10);
        patientEntity.password = bcrypt.hashSync(patientEntity.password, salt);
        return await this.patientDAO.create(patientEntity);
    }

    async findById(patientEntity) {
        return await this.patientDAO.findOne({where: {id: patientEntity.id}});
    }

}

export default PatientRepository;
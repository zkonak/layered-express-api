import bcrypt from 'bcrypt';
class PrescriptionRepository {

    constructor(prescriptionDao) {
        this.prescriptionDAO = prescriptionDao;
    }

    async findAll() {
        return await this.prescriptionDAO.findAll();
    }

    async create(prescriptionEntity) {
        return await this.prescriptionDAO.create(prescriptionEntity);
    }


}

export default PrescriptionRepository;
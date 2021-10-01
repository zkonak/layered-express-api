import bcrypt from 'bcrypt';
class ConsultationRepository {

    constructor(consultationDao) {
        this.consultationDAO = consultationDao;
    }

    async findAll() {
        return await this.consultationDAO.findAll();
    }

    async create(consultationEntity) {
        return await this.consultationDAO.create(consultationEntity);
    }


}

export default ConsultationRepository;
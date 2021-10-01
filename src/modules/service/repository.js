import bcrypt from 'bcrypt';
class ServiceRepository {

    constructor(serviceDao) {
        this.serviceDAO = serviceDao;
    }

    async findAll() {
        return await this.serviceDAO.findAll();
    }

    async create(serviceEntity) {
        const salt = bcrypt.genSaltSync(10);
        serviceEntity.password = bcrypt.hashSync(serviceEntity.password, salt);
        return await this.serviceDAO.create(serviceEntity);
    }

    async findById(serviceEntity) {
        return await this.serviceDAO.findOne({where: {id: serviceEntity.id}});
    }

}

export default ServiceRepository;
import bcrypt from 'bcrypt';
class DrugRepository {

    constructor(drugDao) {
        this.drugDAO = drugDao;
    }

    async findAll() {
        return await this.drugDAO.findAll();
    }

    async create(drugEntity) {
        
      
        return await this.drugDAO.create(drugEntity);
    }

    async findById(drugEntity) {
        return await this.drugDAO.findOne({where: {id: drugEntity.id}});
    }

}

export default DrugRepository;
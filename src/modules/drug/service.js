import DrugEntity from './entity';
import { ApiError } from '../../helpers/error';
class DrugService {

    constructor(drugRepository, mailerService) {
        this.drugRepo = drugRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const drugs = await this.drugRepo.findAll();
        return drugs.map((drug) => new DrugEntity(drug));
    }

    async register(drugData) {
        const drugEntity = new DrugEntity(drugData);
        const newDrug = await this.drugRepo.create(drugEntity);
        return new DrugEntity(newDrug);
    }

    
}

export default DrugService;
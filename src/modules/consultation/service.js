import ConsultationEntity from './entity';
import { ApiError } from '../../helpers/error';
class ConsultationService {

    constructor(consultationRepository, mailerService) {
        this.consultationRepo = consultationRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const consultations = await this.consultationRepo.findAll();
        return consultations.map((consultation) => new ConsultationEntity(consultation));
    }

    async register(consultationData) {
        const consultationEntity = new ConsultationEntity(consultationData);
       
        
        const newConsultation = await this.consultationRepo.create(consultationEntity);
       return new ConsultationEntity(newConsultation);
    }

   
}

export default ConsultationService;
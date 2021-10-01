import PrescriptionEntity from './entity';
import { ApiError } from '../../helpers/error';
class PrescriptionService {

    constructor(prescriptionRepository, mailerService) {
        this.prescriptionRepo = prescriptionRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const prescriptions = await this.prescriptionRepo.findAll();
        return prescriptions.map((prescription) => new PrescriptionEntity(prescription));
    }

    async register(prescriptionData) {
        const prescriptionEntity = new PrescriptionEntity(prescriptionData);
       
        
        const newPrescription = await this.prescriptionRepo.create(prescriptionEntity);
       return new PrescriptionEntity(newPrescription);
    }

   
}

export default PrescriptionService;
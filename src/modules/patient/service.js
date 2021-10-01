import PatientEntity from './entity';
import { ApiError } from '../../helpers/error';
class PatientService {

    constructor(patientRepository, mailerService) {
        this.patientRepo = patientRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const patients = await this.patientRepo.findAll();
        return patients.map((patient) => new PatientEntity(patient));
    }

    async register(patientData) {
        const patientEntity = new PatientEntity(patientData);
        if (!patientEntity.validate())
            throw new ApiError(400, 'Missing required email and password fields');
        
        const newPatient = await this.patientRepo.create(patientEntity);
        await this.mailerService.sendMail(patientEntity);
        return new PatientEntity(newPatient);
    }

    
}

export default PatientService;
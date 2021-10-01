import DoctorEntity from './entity';
import { ApiError } from '../../helpers/error';
class DoctorService {

    constructor(doctorRepository, mailerService) {
        this.doctorRepo = doctorRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const doctors = await this.doctorRepo.findAll();
        return doctors.map((doctor) => new DoctorEntity(doctor));
    }

    async register(doctorData) {
        const doctorEntity = new DoctorEntity(doctorData);
        if (!doctorEntity.validate())
            throw new ApiError(400, 'Missing required email and password fields');
        
        const newDoctor = await this.doctorRepo.create(doctorEntity);
        await this.mailerService.sendMail(doctorEntity);
        return new DoctorEntity(newDoctor);
    }

    async login(doctorData) {
        const doctorEntity = new DoctorEntity(doctorData);
        if (!doctorEntity.validate())
            throw new ApiError(400, 'Missing required email and password fields');
        
        const doctor = await this.doctorRepo.findByEmail(doctorEntity);
        if (!doctor)
            throw new ApiError(400, 'User with the specified email does not exists');

        const passwordMatch = await this.doctorRepo.compareHash(doctorEntity.password, doctor.password);
        if (!passwordMatch)
            throw new ApiError(400, 'User password do not match');

        return new DoctorEntity(doctor);
    }
}

export default DoctorService;
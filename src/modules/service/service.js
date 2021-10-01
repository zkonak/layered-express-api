import ServiceEntity from './entity';
import { ApiError } from '../../helpers/error';
class ServiceService {

    constructor(serviceRepository, mailerService) {
        this.serviceRepo = serviceRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const services = await this.serviceRepo.findAll();
        return services.map((service) => new ServiceEntity(service));
    }

    async register(serviceData) {
        const serviceEntity = new ServiceEntity(serviceData);
        if (!serviceEntity.validate())
            throw new ApiError(400, 'Missing required email and password fields');
        
        const newService = await this.serviceRepo.create(serviceEntity);
        await this.mailerService.sendMail(serviceEntity);
        return new ServiceEntity(newService);
    }

    
}

export default ServiceService;
class ServiceController {

    constructor(serviceService, jwtService) {
        this.serviceService = serviceService;
        this.jwtService = jwtService;
    }

    getAll = async ({res, next}) => {
        try {
            let services = await this.serviceService.getAll();
            res.status(200).json(services);
        } catch (err) {
            next(err);
        }
    }

    register = async (req, res, next) => {
        try {
            const service = await this.serviceService.register({...req.body});
            res.status(201).json(service);
        }
        catch (err) {
            next(err);
        }
    }

   
}

export default ServiceController;
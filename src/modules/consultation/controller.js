class ConsultationController {

    constructor(consultationService, jwtService) {
        this.consultationService = consultationService;
        this.jwtService = jwtService;
    }

    getAll = async ({res, next}) => {
        try {
            let consultations = await this.consultationService.getAll();
            res.status(200).json(consultations);
        } catch (err) {
            next(err);
        }
    }

    register = async (req, res, next) => {
        try {
            const consultation = await this.consultationService.register({...req.body});
            res.status(201).json(consultation);
        }
        catch (err) {
            next(err);
        }
    }

   
}

export default ConsultationController;
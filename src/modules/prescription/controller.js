class PrescriptionController {

    constructor(prescriptionService, jwtService) {
        this.prescriptionService = prescriptionService;
        this.jwtService = jwtService;
    }

    getAll = async ({res, next}) => {
        try {
            let prescriptions = await this.prescriptionService.getAll();
            res.status(200).json(prescriptions);
        } catch (err) {
            next(err);
        }
    }

    register = async (req, res, next) => {
        try {
            const prescription = await this.prescriptionService.register({...req.body});
            res.status(201).json(prescription);
        }
        catch (err) {
            next(err);
        }
    }

   
}

export default PrescriptionController;
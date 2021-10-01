class PatientController {

    constructor(patientService, jwtService) {
        this.patientService = patientService;
        this.jwtService = jwtService;
    }

    getAll = async ({res, next}) => {
        try {
            let patients = await this.patientService.getAll();
            res.status(200).json(patients);
        } catch (err) {
            next(err);
        }
    }

    register = async (req, res, next) => {
        try {
            const patient = await this.patientService.register({...req.body});
            res.status(201).json(patient);
        }
        catch (err) {
            next(err);
        }
    }

   
}

export default PatientController;
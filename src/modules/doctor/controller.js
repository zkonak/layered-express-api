class DoctorController {

    constructor(doctorService, jwtService) {
        this.doctorService = doctorService;
        this.jwtService = jwtService;
    }

    getAll = async ({res, next}) => {
        try {
            let doctors = await this.doctorService.getAll();
            res.status(200).json(doctors);
        } catch (err) {
            next(err);
        }
    }

    register = async (req, res, next) => {
        try {
            const doctor = await this.doctorService.register({...req.body});
            res.status(201).json(doctor);
        }
        catch (err) {
            next(err);
        }
    }

    login = async (req, res, next) => {
        try {
            const doctor = await this.doctorService.login({...req.body});
            const token = await this.jwtService.generateToken({ id: doctor.id });
            res.cookie('auth-cookie', token, {expires: false});
            res.status(200).json(doctor);
        } catch (err) {
            next(err);
        }
    }
}

export default DoctorController;
import bcrypt from 'bcrypt';
class DoctorRepository {

    constructor(doctorDao) {
        this.doctorDAO = doctorDao;
    }

    async findAll() {
        return await this.doctorDAO.findAll();
    }

    async create(doctorEntity) {
        const salt = bcrypt.genSaltSync(10);
        doctorEntity.password = bcrypt.hashSync(doctorEntity.password, salt);
        return await this.doctorDAO.create(userEntity);
    }

    async findByEmail(doctorEntity) {
        return await this.doctorDAO.findOne({where: {email: doctorEntity.email}});
    }

    compareHash = async (password, hash) => await bcrypt.compareSync(password, hash);
}

export default DoctorRepository;
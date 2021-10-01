import {Router} from 'express';
import {jwtService, mailerService} from '../../libs';
import {auth} from '../../middlewares';


import DoctorDao from './dao';
import DoctorRepository from './repository';
import DoctorService from './service';
import DoctorController from './controller';
import DoctorRouter from './router';

const router = Router();

const doctorRepository = new DoctorRepository(DoctorDao);
const doctorService = new DoctorService(doctorRepository, mailerService);
const doctorController = new DoctorController(doctorService, jwtService);
const doctorRouter = new DoctorRouter(router, auth, doctorController);

export {doctorRouter, DoctorDao};
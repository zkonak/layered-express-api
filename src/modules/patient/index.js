import {Router} from 'express';
import {jwtService, mailerService} from '../../libs';
import {auth} from '../../middlewares';


import PatientDao from './dao';
import PatientRepository from './repository';
import PatientService from './service';
import PatientController from './controller';
import PatientRouter from './router';

const router = Router();

const patientRepository = new PatientRepository(PatientDao);
const patientService = new PatientService(patientRepository, mailerService);
const patientController = new PatientController(patientService, jwtService);
const patientRouter = new PatientRouter(router, auth, patientController);

export {patientRouter, PatientDao};
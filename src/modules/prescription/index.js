import {Router} from 'express';
import {jwtService, mailerService} from '../../libs';
import {auth} from '../../middlewares';


import PrescriptionDao from './dao';
import PrescriptionRepository from './repository';
import PrescriptionService from './service';
import PrescriptionController from './controller';
import PrescriptionRouter from './router';

const router = Router();

const prescriptionRepository = new PrescriptionRepository(PrescriptionDao);
const prescriptionService = new PrescriptionService(prescriptionRepository, mailerService);
const prescriptionController = new PrescriptionController(prescriptionService, jwtService);
const prescriptionRouter = new PrescriptionRouter(router, auth, prescriptionController);

export {prescriptionRouter, PrescriptionDao};
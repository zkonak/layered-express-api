import {Router} from 'express';
import {jwtService, mailerService} from '../../libs';
import {auth} from '../../middlewares';


import ConsultationDao from './dao';
import ConsultationRepository from './repository';
import ConsultationService from './service';
import ConsultationController from './controller';
import ConsultationRouter from './router';

const router = Router();

const consultationRepository = new ConsultationRepository(ConsultationDao);
const consultationService = new ConsultationService(consultationRepository, mailerService);
const consultationController = new ConsultationController(consultationService, jwtService);
const consultationRouter = new ConsultationRouter(router, auth, consultationController);

export {consultationRouter, ConsultationDao};
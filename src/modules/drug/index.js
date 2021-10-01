import {Router} from 'express';
import {jwtService, mailerService} from '../../libs';
import {auth} from '../../middlewares';


import DrugDao from './dao';
import DrugRepository from './repository';
import DrugService from './service';
import DrugController from './controller';
import DrugRouter from './router';

const router = Router();

const drugRepository = new DrugRepository(DrugDao);
const drugService = new DrugService(drugRepository, mailerService);
const drugController = new DrugController(drugService, jwtService);
const drugRouter = new DrugRouter(router, auth, drugController);

export {drugRouter, DrugDao};
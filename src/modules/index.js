import {doctorRouter} from './doctor';
import {patientRouter} from './patient';
import {serviceRouter} from './service';
import {drugRouter} from './drug';
import {consultationRouter} from './consultation';
import {prescriptionRouter} from './prescription';

const routes = [doctorRouter,serviceRouter,patientRouter,drugRouter,consultationRouter,prescriptionRouter];

export default routes;
import { MySQLRepository } from "./MySQLRepository";
import { GetDataUseCase } from "../app/getDataUseCase";
import { NewDataUseCase } from "../app/newDataUseCase";
import { GetDataController } from "./controllers/getDataController";
import { NewDataController } from "./controllers/newDataController";
import { NodeMailerService } from "./helpers/nodeMailer";
import { SocketService } from "./helpers/socketIO";


export const sqlizeRepo = new MySQLRepository();

export const serviceMesssage = new SocketService();
export const nodeMailerService = new NodeMailerService();

export const getDataUseCase = new GetDataUseCase(sqlizeRepo, serviceMesssage)
export const getDataController = new GetDataController(getDataUseCase)

export const newDataUseCase = new NewDataUseCase(sqlizeRepo, serviceMesssage)
export const newDataController = new NewDataController(newDataUseCase)
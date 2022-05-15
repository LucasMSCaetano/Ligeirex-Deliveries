import { Router } from "express";
import { AutenticateClientController } from "./modules/account/autenticateUser/autenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientContoller";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const createClientContoller = new CreateClientController();
const autenticateClientController = new AutenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post("/authenticate/", autenticateClientController.handle);

routes.post("/client/", createClientContoller.handle);

routes.post("/deliveryman/", createDeliverymanController.handle);

export { routes };

import { Router } from "express";
import { AutenticateClientController } from "./modules/account/autenticateUser/autenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientContoller";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();


const autenticateClientController = new AutenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createClientContoller = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post("/clients/authenticate", autenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.post("/client/", createClientContoller.handle);

routes.post("/deliveryman/", createDeliverymanController.handle);

export { routes };

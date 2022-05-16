import { Router } from "express";
import { AutenticateClientController } from "./modules/account/autenticateUser/autenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientContoller";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();


const autenticateClientController = new AutenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createClientContoller = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();

routes.post("/clients/authenticate", autenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.post("/client/", createClientContoller.handle);

routes.post("/deliveryman/", createDeliverymanController.handle);

routes.post("/delivery", createDeliveryController.handle)

export { routes };

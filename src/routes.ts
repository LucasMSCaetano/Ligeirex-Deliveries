import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AutenticateClientController } from "./modules/account/autenticateUser/autenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientContoller";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();


const autenticateClientController = new AutenticateClientController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createClientContoller = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllAvailableController = new FindAllAvailableController();

routes.post("/clients/authenticate", autenticateClientController.handle);
routes.post("/deliveryman/authenticate", authenticateDeliverymanController.handle);

routes.post("/client/", createClientContoller.handle);

routes.post("/deliveryman/", createDeliverymanController.handle);

routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle)

routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableController.handle);

routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle)

export { routes };

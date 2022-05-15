import { Router } from "express";
import { AutenticateClientController } from "./modules/account/autenticateUser/autenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientContoller";

const routes = Router();

const createClientContoller = new CreateClientController();
const autenticateClientController = new AutenticateClientController();

routes.post("/authenticate/", autenticateClientController.handle);

routes.post("/client/", createClientContoller.handle);

export { routes };

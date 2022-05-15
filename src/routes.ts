import { Router } from "express";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientContoller";

const routes = Router();

const createClientContoller = new CreateClientController();

routes.post("/client/", createClientContoller.handle);

export { routes };

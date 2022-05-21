import { Router } from 'express';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import AutenticateClientController from '../modules/account/autenticateUser/autenticateClientController';
import CreateClientController from '../modules/clients/useCases/createClient/CreateClientContoller';
import FindAllDeliveriesController from '../modules/clients/useCases/deliveries/FindAllDeliveriesController';

export default function ClientRouter (router:Router) {
  router.post(
    '/client',
    CreateClientController
  );

  router.post(
    '/clients/authenticate',
    AutenticateClientController
  );

  router.get(
    '/client/deliveries',
    ensureAuthenticateClient,
    FindAllDeliveriesController
  );
};

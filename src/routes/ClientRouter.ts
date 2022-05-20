import { Router } from 'express';
import CreateClientController from '../modules/clients/useCases/createClient/CreateClientContoller';

export default function ClientRouter (router:Router) {
  router.post(
    '/client',
    CreateClientController
  );
};

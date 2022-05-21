import { Router } from 'express';
import { ensureAuthenticateClient } from '../middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import CreateDeliveryController from '../modules/deliveries/useCases/createDelivery/CreateDeliveryController';
import FindAllAvailableController from '../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';

export default function DeliverieRouter (router:Router) {
  router.post(
    '/delivery',
    ensureAuthenticateClient,
    CreateDeliveryController
  );

  router.get(
    '/delivery/available',
    ensureAuthenticateDeliveryman,
    FindAllAvailableController
  );
};

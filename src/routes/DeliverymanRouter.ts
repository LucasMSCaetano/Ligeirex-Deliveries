import { Router } from 'express';
import { ensureAuthenticateDeliveryman } from '../middlewares/ensureAuthenticateDeliveryman';
import AuthenticateDeliverymanController from '../modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import FinishDeliverieController from '../modules/deliveries/useCases/finishDeliverie/FinishDeliverieController';
import UpdateDeliverymanController from '../modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import CreateDeliverymanController from '../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import HistoricDeliveriesDeliveryman from '../modules/deliveryman/useCases/HistoricDeliveriesDeliveryman/HistoricDeliveriesDeliverymanController';

export default function DeliverymanRouter (router:Router) {
  router.post(
    '/deliveryman',
    CreateDeliverymanController
  );

  router.post(
    '/deliveryman/authenticate',
    AuthenticateDeliverymanController
  );

  router.put(
    '/delivery/updateDeliveryman/:id',
    ensureAuthenticateDeliveryman,
    UpdateDeliverymanController
  );  

  router.get(
    '/deliveryman/HistoricDeliveries',
    ensureAuthenticateDeliveryman,
    HistoricDeliveriesDeliveryman
  ); 

  router.put(
    '/delivery/FinishDeliverie/:id',
    ensureAuthenticateDeliveryman,
    FinishDeliverieController
  );  
  
};

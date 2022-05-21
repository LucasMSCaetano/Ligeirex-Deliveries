import { Request, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";

export default async function UpdateDeliverymanController (request: Request, response: Response){
    try{
        const { id_deliveryman } = request
        const { id: id_delivery } = request.params

        const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();
        const delivery = await updateDeliverymanUseCase.execute({id_delivery, id_deliveryman})

        return response.json(delivery)
    }catch (Error) {
        console.error(Error);
        return response.json(Error);
    }
}

import { Request, Response } from "express";
import { FinishDeliverieUseCase } from "./FinishDeliverieUseCase";

export default async function  FinishDeliverieController(request: Request, response: Response){
    try{
        const { id_deliveryman } = request
        const { id: id_delivery } = request.params

        const finishDeliverieUseCase = new FinishDeliverieUseCase();
        const delivery = await finishDeliverieUseCase.execute({id_delivery, id_deliveryman})

        return response.json(delivery)
    }catch (Error) {
        console.error(Error);
        return response.json(Error);
    }
}
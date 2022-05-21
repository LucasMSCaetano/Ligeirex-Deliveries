
import { Request, Response } from "express";
import { HistoricDeliveriesDeliverymanUseCase } from "./HistoricDeliveriesDeliverymanUseCase";

export default async function HistoricDeliveriesDeliveryman (request: Request, response: Response){
    try{
        const { id_deliveryman } = request

        const historicDeliveriesUseCase = new HistoricDeliveriesDeliverymanUseCase();
        const result: any = await historicDeliveriesUseCase.execute(id_deliveryman)
        if(result.status)return response.status(result.status).json({success: "false", message: result.message})
        
        return response.json(result)
    }catch (Error) {
        console.error(Error);
        return response.json(Error);
    }
}
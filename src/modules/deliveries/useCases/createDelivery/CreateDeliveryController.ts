import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./CreateDeliveryUseCase";

export default async function CreateDeliveryController (request: Request, response: Response){
    try{
        const { id_client } = request
        const { item_name } = request.body
        const createDeliveryUseCase = new CreateDeliveryUseCase();

        const delivery = await createDeliveryUseCase.execute({ id_client, item_name})

        return response.json(delivery)
    }catch (Error) {
        console.error(Error);
        return response.json(Error);
    }
}
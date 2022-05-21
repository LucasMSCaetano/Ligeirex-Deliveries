import { Request, Response } from "express";
import { FindAllDeliveriesUseCase } from "./FindAllDeliveriesUseCase";

export default async function FindAllDeliveriesController (request: Request, response: Response){
    try{
        const { id_client } = request

        const findAllDeliveriesUseCase = new FindAllDeliveriesUseCase();
        const deliveries = await findAllDeliveriesUseCase.execute(id_client)

        return response.json(deliveries)
    } catch (Error) {
        console.error(Error);
        return response.json(Error);
    }
}
import { Request, Response } from "express";
import { FindAllAvailableUseCase } from "./FindAllAvailableUseCase";

export default async function FindAllAvailableController (request: Request, response: Response){
    try{
        const findAllAvailableUseCase = new FindAllAvailableUseCase();

        const deliveries = await findAllAvailableUseCase.execute()

        return response.json(deliveries)
    }catch (Error) {
        console.error(Error);
        return response.json(Error);
    }
}
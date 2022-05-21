import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUseCase";

export default async function CreateDeliverymanController (request: Request, response: Response){
    try{
        const {username, password} = request.body;
        
        const createDeliverymanUseCase = new CreateDeliverymanUseCase();
        const result: any = await createDeliverymanUseCase.execute({
            username,
            password
        })
        if(result.status)return response.status(result.status).json({success: "false", message: result.message})

        return response.json(result);
    }catch (Error) {
        console.error(Error);
        return response.json(Error);
    }
}
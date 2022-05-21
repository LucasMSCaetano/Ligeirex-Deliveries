import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./authenticateDeliverymanUseCase";

export default async function AuthenticateDeliverymanController (request: Request, response: Response) {
    try{
        const {username, password} = request.body;

        const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
        const result: any = await authenticateDeliverymanUseCase.execute({username, password})
        if(result.status)return response.status(result.status).json({success: "false", message: result.message})

        return response.json(result);
    }catch (Error) {
        console.error(Error);
        return response.json(Error);
    }
}
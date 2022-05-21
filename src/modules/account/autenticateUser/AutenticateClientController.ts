import { Request, Response } from "express";
import { AutenticateClientUseCase } from "./AutenticateClientUseCase";

export default async function AutenticateClientController (request: Request, response: Response){
    try{
        const {username, password} = request.body;

        const autenticateClientUseCase = new AutenticateClientUseCase();
        const result: any = await autenticateClientUseCase.execute({username, password})
        if(result.status)return response.status(result.status).json({success: "false", message: result.message})
        
        return response.json(result);
    } catch (Error) {
        console.error(Error);
        return response.json(Error);
    }
}
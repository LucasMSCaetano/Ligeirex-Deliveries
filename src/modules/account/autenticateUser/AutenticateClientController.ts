import { Request, Response } from "express";
import { AutenticateClientUseCase } from "./AutenticateClientUseCase";

export class AutenticateClientController {
    async handle(request: Request, response: Response){
        const {username, password} = request.body;

        const autenticateClientUseCase = new AutenticateClientUseCase();
        const result = await autenticateClientUseCase.execute({username, password})

        return response.json(result);
    }
}
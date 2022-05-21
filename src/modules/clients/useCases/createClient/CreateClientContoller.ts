import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export default async function CreateClientController (request: Request, response: Response) {
   try{
        const {username, password} = request.body;
        
        const createClientUseCase = new CreateClientUseCase();
        const result: any = await createClientUseCase.execute({
            username,
            password
        })
        if(result.status)return response.status(result.status).json({success: "false", message: result.message})
        
        return response.json(result);
    } catch (Error) {
        console.error(Error);
        return response.json(Error);
      }
}
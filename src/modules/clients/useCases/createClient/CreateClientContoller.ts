import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export default async function CreateClientController (request: Request, response: Response) {
   try{
        const {username, password} = request.body;
        
        const createClientUseCase = new CreateClientUseCase();
        const result = await createClientUseCase.execute({
            username,
            password
        })

        return response.json(result);
    } catch (Error) {
        console.error(Error);
        return response.json(Error);
      }
}
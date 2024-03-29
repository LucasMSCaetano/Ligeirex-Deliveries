import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Errors } from "../utils/Erros";

interface IPayload{
    sub: string
}

export async function ensureAuthenticateClient( request: Request, response: Response, next: NextFunction){
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).json(Errors.tokenMissing())
    }

    const [,token] = authHeader.split(" ")

    try{
       const {sub} = verify(token, "698dc19d489c4e4db73e28a713eab07b") as IPayload

       request.id_client = sub
       
       return next()
    }catch(err){
        return response.status(401).json(Errors.invalidToken())
    }
}
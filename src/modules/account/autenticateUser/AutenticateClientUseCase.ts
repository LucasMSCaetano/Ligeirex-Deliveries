import { prisma } from "../../../database/prismaClient";
import {compare} from "bcrypt";
import {sign} from "jsonwebtoken"

interface IAuthenticateClient{
    username: string;
    password: string;
}

export class AutenticateClientUseCase {
    async execute({username, password}: IAuthenticateClient){
        const client = await prisma.clients.findFirst({
            where:{
                username
            }
        })

        if(!client){
            throw new Error("Username or password invalid!")
        }

        const passwordMatch = await compare(password, client.password)
        if(!passwordMatch) throw new Error("Username or password invalid!")

        const token = sign({username}, "698dc19d489c4e4db73e28a713eab07b", {
            subject: client.id,
            expiresIn: "1d"
        })

        return token 
    }
}
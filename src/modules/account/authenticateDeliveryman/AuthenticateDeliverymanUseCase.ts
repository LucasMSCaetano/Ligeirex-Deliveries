import { prisma } from "../../../database/prismaClient";
import {compare} from "bcrypt";
import {sign} from "jsonwebtoken"

interface IAuthenticateDeliveryman{
    username: string;
    password: string;
}

export class AuthenticateDeliverymanUseCase {
    async execute({username, password}: IAuthenticateDeliveryman){
        const deliveryman = await prisma.deliveryman.findFirst({
            where:{
                username
            }
        })

        if(!deliveryman){
            throw new Error("Username or password invalid!")
        }

        const passwordMatch = await compare(password, deliveryman.password)
        if(!passwordMatch) throw new Error("Username or password invalid!")

        const token = sign({username}, "698dc19d489c4e4cv73e28a713eab07b", {
            subject: deliveryman.id,
            expiresIn: "1d"
        })

        return token 
    }
}
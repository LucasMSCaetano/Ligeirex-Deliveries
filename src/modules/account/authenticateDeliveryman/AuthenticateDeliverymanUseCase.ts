import { prisma } from "../../../database/prismaClient";
import {compare} from "bcrypt";
import {sign} from "jsonwebtoken"
import { Errors } from "../../../utils/Erros";

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
            return Errors.generic.invalidField({fieldKey: 'username'})
        }

        const passwordMatch = await compare(password, deliveryman.password)
        if(!passwordMatch) return Errors.generic.invalidField({fieldKey: 'password'})

        const token = sign({username}, "698dc19d489c4e4cv73e28a713eab07b", {
            subject: deliveryman.id,
            expiresIn: "1d"
        })

        return token 
    }
}
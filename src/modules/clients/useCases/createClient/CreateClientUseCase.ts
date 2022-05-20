import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";
import errorToJSON from 'error-to-json'
import {Errors} from '../../../../utils/Erros'
interface ICreateClient{
    username: string;
    password: string;
}

export class CreateClientUseCase {
    async execute({ username, password }: ICreateClient){

        const clientExist = await prisma.clients.findFirst({
            where:{
                username: {
                    equals: username,
                    mode: "insensitive"
                }
            }
        })

        if(clientExist){
            // var json = errorToJSON(new Error("Client already exists"))
            return Errors.generic.invalidType({fieldKey: 'Client'})
        }

        const hashPassword = await hash(password, 10);

        const client = await prisma.clients.create({
            data: {
                username,
                password: hashPassword
            }
        })

        return client
    }
}
import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";
import { Errors } from '../../../../utils/Erros'
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
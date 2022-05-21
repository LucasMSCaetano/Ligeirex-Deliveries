import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";
import { Errors } from "../../../../utils/Erros";

interface ICreateDeliveryman{
    username: string;
    password: string;
}

export class CreateDeliverymanUseCase {
    async execute ({ username, password }: ICreateDeliveryman){
        const deliverymanExist = await prisma.deliveryman.findFirst({
            where:{
                username: {
                    equals: username,
                    mode: "insensitive"
                }
            }
        })

        if(deliverymanExist){
            return Errors.generic.invalidType({fieldKey: 'Deliveryman'})
        }

        const hashPassword = await hash(password, 10);

        const deliveryman = await prisma.deliveryman.create({
            data: {
                username,
                password: hashPassword
            }
        })

        return deliveryman
    }
}
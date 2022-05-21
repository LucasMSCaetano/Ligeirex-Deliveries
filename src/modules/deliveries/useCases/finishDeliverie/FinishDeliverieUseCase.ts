import { prisma } from "../../../../database/prismaClient";

interface IFinishDeliverie {
    id_delivery: string
    id_deliveryman: string
}

export class FinishDeliverieUseCase{
    async execute({id_delivery, id_deliveryman}: IFinishDeliverie){
        const result = await prisma.deliveries.updateMany({
            where:{
                id: id_delivery,
                id_deliveryman
            },
            data:{
                end_at: new Date()
            }
        })

        return result
    }
}
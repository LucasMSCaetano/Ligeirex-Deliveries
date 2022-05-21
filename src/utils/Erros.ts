const errorFunction = (status:number, message:string) => ({ status, message });
interface IErrorsFildKeys{
    fieldKey: string;
}

export const Errors  = {
    generic: {
        invalidType: ({ fieldKey }: IErrorsFildKeys) => errorFunction(400, `${fieldKey} already exists`),
    },
    tokenMissing: () => errorFunction(401, 'Token missing'),
    invalidToken: () => errorFunction(401, 'Invalid token!')
}

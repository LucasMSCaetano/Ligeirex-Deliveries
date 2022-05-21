import errorToJSON from 'error-to-json'

interface IErrorsFildKeys{
    fieldKey: string;
}

export const Errors = {
    generic: {
        invalidType: ({ fieldKey }: IErrorsFildKeys) => errorToJSON(new Error(`${fieldKey} already exists`))
    },
    tokenMissing: () => errorToJSON(new Error('Token missing')),
    invalidToken: () => errorToJSON(new Error('Invalid token!'))
}

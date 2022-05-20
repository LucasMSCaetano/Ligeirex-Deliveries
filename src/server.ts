import { NextFunction, Request, Response } from "express"
import "express-async-errors"
import app from "./config/App"
import Environments from "./config/Environments"
const { PORT } = Environments;


app.use((err: Error, request: Request, response: Response, next: NextFunction) =>{
    if(err instanceof Error){
        return response.status(400).json({ message: err.message })
    }
    return response.status(500).json({status: "error", message: "Internal server error"})
})

app.listen(3000, () => console.log(`Listening at http://[::]:${PORT}`))
import app from "./config/App"
import Environments from "./config/Environments"
//const { PORT } = Environments;
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening at http://[::]:${PORT}`))
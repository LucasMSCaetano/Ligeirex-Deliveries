import app from "./config/App"
import Environments from "./config/Environments"
const { PORT } = Environments;

app.listen(3000, () => console.log(`Listening at http://[::]:${PORT}`))
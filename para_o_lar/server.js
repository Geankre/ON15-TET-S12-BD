const app = require("./src/app")

const PORT = process.env.PORT

app.listen(PORT, ()=> console.log(`Relaxa, o servidor tá rodando na porta ${PORT}`))
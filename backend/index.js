import express from 'express'
import body_parser from 'body-parser'
import cors from 'cors'
import usersRoutes from './src/routes/users.routes.js'

const server = express()
const PORT = 3333
// config
server.use(body_parser.json())
server.use(body_parser.urlencoded({ extended: false }))
server.use(cors())

// routes
server.use(usersRoutes)

server.listen(PORT, () => {
    console.log(`Servidor funcionando, URL: http://localhost:${PORT}`);
})

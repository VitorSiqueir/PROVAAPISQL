import 'dotenv/config'

import usuarioController from './controller/usuariocontroller.js';

import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());

server.use(express.json());

server.use(usuarioController);

server.listen(process.env.PORT,
    () => console.log(`API Online na porta ${process.env.PORT}`));
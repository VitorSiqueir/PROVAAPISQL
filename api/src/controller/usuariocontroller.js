import { login } from '../repository/usuariorepository.js'

import { response, Router } from "express";
const server = Router();

server.post('/Usuario/login', async (req, resp) => {
    try{
        const { email, senha } = req.body;

        const reposta = await login (email, senha );
        resp.send({})
    }

    catch (err){
        resp.status(400).send({
            erro: 'OCORREU UM ERRO'
        });
    }
})

export default server;
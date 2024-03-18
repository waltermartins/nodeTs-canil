import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import routerHome from './router';
import { Request, Response } from 'express';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.resolve(__dirname, 'views/pages'));
server.engine('mustache', mustache());
server.use(express.static(path.resolve(__dirname, '../public')));

server.use(routerHome);

server.use((req: Request, res: Response)=>{
    res.send('<h1>pagina não encontrada</h1>')
})

server.listen(process.env.PORT, () => {
    console.log('servidor rodando');
})
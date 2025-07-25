import express from 'express';
import routerLivros from './routes/livrosRouter.js'

const app = express();
app.use(express.json())

const port = 8000;

app.use('/livros', routerLivros);

app.listen(port, () => {
    console.log(`Servidor on-line na porta ${port}`);
})
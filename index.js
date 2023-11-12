import express from 'express';

const porta = 3000;
const host ='0.0.0.0';

const app = express();

app.use(express.static('./paginas'));

app.get('/',(requisicao,resposta)=>{
    resposta.end(`
    <!DOCTYPE html>
    <head>
    <meta charset="UTF-8">
    <title>Menu do sistema</title>
      </head>
     <body>
        <h1> Menu </h1>
        <ul>
            <li><a href="/cadastro">Cadastrar Usuário</a></li>
         </ul>
    </body>
     </html>
     `);

})

app.listen(porta,host,()=>{
    console.log(`Servidor executado na url http://${host}:${porta}`);   
});

const express = require('express');

const app = express()

app.use(express.json())

const usuarios = [{
    id: '01',
    nome: 'rojerio',
    gmail: 'rojerio@gmail.com',
    telefone: '48 123123123',
    dataI: '12/11/2024',
    dataS: '13/11/2024',
    quarto: '101'
},]

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.get('/usuarios/:nome', (req,res) =>{
    const { nome } = req.params;
    const usuarios = usuarios.find(v => v.nome === nome);
    if (usuarios) {
        res.json(usuarios);
    } else {
        res.status(404).json({message: 'usuario não encontrado'});
    }
})

app.post('/usuarios', (req,res) =>{
    const { id, nome, gmail, telefone, dataI, dataS, quarto} = req.body;
    const usuarios = { id, nome, gmail, telefone, dataI, dataS, quarto};
    usuarios.push(usuarios);
    res.status(201).json({message: 'usuario cadastrado com sucesso !!!'});
});

app.put('/usuarios/:nome', (req,res) =>{
    const { nome } = req.params;
    const { id, gmail, telefone, dataI, dataS, quarto } = req.body;
    const usuarios = usuarios.find(v => v.nome === nome);
    if(usuarios) {
        usuarios.id = id || usuarios.id;
        usuarios.id = gmail || usuarios.gmail;
        usuarios.id = telefone || usuarios.telefone;
        usuarios.id = dataI || usuarios.dataI;
        usuarios.id = dataS || usuarios.dataS;
        usuarios.id = quarto || usuarios.quarto;
        res.json({ message: 'informações do usuario atualizadas com sucesso !!!'});
    } else {
        res.status(404).json({message: 'usuario não atualizado'});
    }
});

app.delete('/usuarios/:nome', (req,res) =>{
    const { nome } = req.params;
    const usuariosIndex = usuarios.findIndex(v => v.nome === nome);
    if(usuariosIndex !== -1) {
        usuarios.splice(usuariosIndex, 1); // alterar, remover
        res.json({message: 'usuario excluido com sucesso !!!'});
    } else {
        res.status(404).json({message: 'usuario não excluido'});
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})
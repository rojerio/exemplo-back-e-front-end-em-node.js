const usuarios = [];

function getUsuarios(req, res) {
    res.json(usuarios);
}

function getUsuariosByName(req, res) {
    const { nome } = req.params;
    const usuarios = usuarios.find(v => v.nome === nome);
    if (usuarios) {
        res.json(usuarios);
    } else {
        res.status(404).json({ message: 'Usuario não encontrado.' });
    }

}

function createUsuario(req, res) {
    const { name, email, idade, sexo } = req.body;
    const usuarios = { name, email, idade, sexo };

    usuarios.push(usuarios);
    res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
}

function updateUsuario(req, res) {
    const { name } = req.params;
    const { id, gmail, telefone, dataI, dataS, quarto } = req.body;
    const usuarios = usuarios.find(v => v.name === name);
    if (usuarios) {
        usuarios.id = id || usuarios.id;
        usuarios.id = gmail || usuarios.gmail;
        usuarios.id = telefone || usuarios.telefone;
        usuarios.id = dataI || usuarios.dataI;
        usuarios.id = dataS || usuarios.dataS;
        usuarios.id = quarto || usuarios.quarto;
        res.json({ message: 'Informações do usuario atualizadas com sucesso.' });
    } else {
        res.status(404).json({ message: 'usuario não encontrado.' });
    }
}

function deleteUsuarios(req, res) {
    const { nome } = req.params;
    const usuariosIndex = usuarios.findIndex(v => v.nome === nome);
    if (usuariosIndex !== -1) {
        usuarios.splice(usuariosIndex, 1);
        res.json({ message: 'usuario excluído comsucesso.' });
    } else {
        res.status(404).json({ message: 'usuario não encontrado.' });
    }

}

module.exports = { getUsuarios, getUsuariosByName, updateUsuario, deleteUsuarios, createUsuario };
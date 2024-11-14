import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idade: '',
    sexo: ''
  });

  useEffect(() => {
    // Carrega os usuarios ao montar o componente
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    try {
      // Faz uma requisição GET para obter a lista de usuários
      const response = await axios.get(`http://localhost:3000/usuarios`);
      // Atualiza o estado com os usuarios obtidos
      setUsuarios(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = e => {
    // Atualiza o estado do formulário quando o valor de um input é alterado
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreateUsuario = async e => {
    e.preventDefault();
    try {
      // Faz uma requisição POST para criar um novo usuario
      await axios.post(`http://localhost:3000/Usuarios`, formData);
      // Limpa o formulário após o cadastro
      setFormData({
        name: '',
        email: '',
        idade: '',
        sexo: ''
      });
      // Atualiza a lista de usuarios
      fetchUsuarios();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateUsuarios = async placa => {
    try {
      // Faz uma requisição PUT para atualizar as informações de um usuario
      await axios.put(`http://localhost:3000/usuarios/${name}`, formData);
      // Limpa o formulário após a atualização
      setFormData({
        name: '',
        email: '',
        idade: '',
        sexo: ''
      });
      // Atualiza a lista de usuarios
      fetchUsuarios();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUsuarios = async name => {
    try {
      // Faz uma requisição DELETE para excluir um usuario
      await axios.delete(`http://localhost:3000/usuarios/${name}`);
      // Atualiza a lista de veículos
      fetchusuarios();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Usuarios</h1>
      <form onSubmit={handleCreateUsuarios}>
        <label>
          Placa:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Idade:
          <input
            type="text"
            name="idade"
            value={formData.idade}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Ano:
          <input
            type="text"
            name="sexo"
            value={formData.sexo}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      <ul>
        {usuarios.map(usuarios => (
          <li key={usuarios.name}>
            {usuarios.name} - {usuarios.email} - {usuarios.idade} - {usuários.sexo}
            <button onClick={() => handleUpdateVehicle(usuarios.name)}>Atualizar</button>
            <button onClick={() => handleDeleteVehicle(usuarios.name)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
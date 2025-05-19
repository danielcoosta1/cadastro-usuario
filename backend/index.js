import express from "express";
import cors from "cors";
/* global process */
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Dados simulados
let usuarios = [
  { id: 1, name: "Daniel", email: "daniel@email.com", age: 30 },
  { id: 2, name: "Ana", email: "ana@email.com", age: 25 },
];

// Buscar todos os usuários
app.get("/", (req, res) => {
  res.json(usuarios);
});

// Deletar usuário por ID
app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  usuarios = usuarios.filter((user) => user.id !== id);
  res.status(204).send();
});


app.post("/users", (req, res) => {
  const { name, email, age } = req.body;

  const novoUsuario = {
    id: usuarios.length + 1,
    name,
    email,
    age,
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

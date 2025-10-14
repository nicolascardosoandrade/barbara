// server.js - Servidor Node.js para projeto full-stack com Express, MySQL e .env

require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

const express = require('express');
const mysql = require('mysql2/promise'); // Usando mysql2 para conexões assíncronas
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do banco de dados MySQL a partir do .env
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'meu_projeto',
  port: process.env.DB_PORT || 3306
};

// Função para conectar ao MySQL
async function connectDB() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Conectado ao MySQL com sucesso!');
    return connection;
  } catch (error) {
    console.error('Erro ao conectar ao MySQL:', error);
    process.exit(1);
  }
}

// Conecta ao banco ao iniciar o servidor
let db;
connectDB().then(connection => {
  db = connection;
});

// Middleware para parsing de JSON (para APIs)
app.use(express.json());

// Serve arquivos estáticos do front-end (pasta 'public' para HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota básica para o front-end (página inicial)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Exemplo de rota de API back-end (GET /api/users - lista usuários do banco)
app.get('/api/users', async (req, res) => {
  try {
    if (!db) {
      return res.status(500).json({ error: 'Banco de dados não conectado' });
    }
    const [rows] = await db.execute('SELECT * FROM users'); // Assumindo tabela 'users'
    res.json(rows);
  } catch (error) {
    console.error('Erro na consulta:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Exemplo de rota de API back-end (POST /api/users - adiciona usuário)
app.post('/api/users', async (req, res) => {
  try {
    if (!db) {
      return res.status(500).json({ error: 'Banco de dados não conectado' });
    }
    const { name, email } = req.body;
    const [result] = await db.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [name, email]
    );
    res.json({ id: result.insertId, message: 'Usuário adicionado com sucesso' });
  } catch (error) {
    console.error('Erro na inserção:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  if (db) {
    await db.end();
    console.log('Conexão com MySQL encerrada.');
  }
  process.exit(0);
});
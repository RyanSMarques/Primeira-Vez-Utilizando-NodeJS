const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');

// Importando os modelos
const Cliente = require('./models/Cliente');
const Produto = require('./models/Produto');
const Venda = require('./models/Venda');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Sincroniza os modelos com o banco de dados
sequelize.sync()
    .then(() => {
        console.log('Banco de dados sincronizado');
    })
    .catch(err => console.log(err));

// Importando as rotas
const clientesRoutes = require('./routes/clientes');
const produtosRoutes = require('./routes/produtos');
const vendasRoutes = require('./routes/vendas');

// Usando as rotas
app.use('/api/clientes', clientesRoutes);
app.use('/api/produtos', produtosRoutes);
app.use('/api/vendas', vendasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

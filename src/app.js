const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('welcome!'));
  
app.listen(PORT, () => console.log(`☁️ Server rodando na porta ${PORT}`));

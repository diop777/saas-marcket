const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('API SaaS Market en ligne 🚀');
});

app.listen(PORT, () => {
  console.log(`Serveur backend démarré sur http://localhost:${PORT}`);
});
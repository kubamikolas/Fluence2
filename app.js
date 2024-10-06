const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

// Nastavení statické složky (kde jsou tvoje HTML soubory)
app.use(express.static(path.join(__dirname)));

// Zpracování hlavní stránky
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Zpracování stránky about.html
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.listen(port, () => {
  console.log(`Server běží na http://localhost:${port}`);
});

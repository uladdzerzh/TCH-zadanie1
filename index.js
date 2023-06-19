const express = require('express');
const app = express();

const port = 5000;

app.get('/', (req, res) => {
  const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const clientDate = new Date().toLocaleString('pl-PL', {
    timeZone: 'Europe/Warsaw'
  });

  const message = `Adres IP: ${clientIp}  Data i godzina: ${clientDate} Autor: Uladzislau Dzerzhanovich`;
  res.send(message);
  
});

//Wywoływanie po uruchomieniu kontenera
app.listen(port, () => {
  // Data uruchomienia
  const serverStartDate = new Date().toLocaleString('pl-PL', {
    timeZone: 'Europe/Warsaw'
  });

  //Logi
  console.log(`Serwer uruchomiony. Data uruchomienia: ${serverStartDate}. Autor: Uladzislau. Port: ${port}`);
});

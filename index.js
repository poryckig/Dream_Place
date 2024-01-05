import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;
const mysql = await import('mysql');

// Configure database connection parameters
const connection = mysql.createConnection({
    host : "localhost",
    user : "poryckig",
    password : "Koris123",
    database : "dream_place",
});

// Connect to the MySQL server
connection.connect((err) => {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as id ' + connection.threadId);
  });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join('index.html'));
});

app.get("/kontynenty", (req, res) => {
  const query = "SELECT nazwa FROM kontynenty";
  connection.query(query, (err, results) => {
      if (err) {
          res.status(500).send('Error executing the query');
          return;
      }
      res.json(results);
  });
});

app.get("/kraje", (req, res) => {
  const query = "SELECT nazwa FROM kraje";
  connection.query(query, (err, results) => {
      if (err) {
          res.status(500).send('Error executing the query');
          return;
      }
      res.json(results);
  });
});

app.get("/miasta", (req, res) => {
  const query = "SELECT nazwa FROM miasta";
  connection.query(query, (err, results) => {
      if (err) {
          res.status(500).send('Error executing the query');
          return;
      }
      res.json(results);
  });
});

app.get("/rozmiary-pokoju", (req, res) => {
  const query = "SELECT DISTINCT liczba_osob FROM pokoje ORDER BY liczba_osob";
  connection.query(query, (err, results) => {
      if (err) {
          res.status(500).send('Error executing the query');
          return;
      }
      res.json(results); // Zwraca dostępne rozmiary pokoju jako JSON
  });
});

app.use(express.json()); // Aby obsługiwać JSON w ciałach żądań

app.post("/wyszukaj-pokoje", (req, res) => {
  const { kontynenty, kraje, miasta, liczbyOsob, dataRozpoczecia, liczbaDni } = req.body;

  console.log('Dane wejściowe:', { kontynenty, kraje, miasta, liczbyOsob, dataRozpoczecia, liczbaDni });

  // Stwórz listę placeholderów na podstawie długości tablicy.
  const placeholderList = (values) => values.length ? values.map(() => '?').join(', ') : 'NULL';

  // Użyj funkcji placeholderList do stworzenia listy placeholderów.
  const kontynentyPlaceholders = placeholderList(kontynenty);
  const krajePlaceholders = placeholderList(kraje);
  const miastaPlaceholders = placeholderList(miasta);
  const liczbyOsobPlaceholders = placeholderList(liczbyOsob);

  // Tworzenie dynamicznych warunków WHERE tylko wtedy, gdy tablice nie są puste.
  const whereConditions = [];
  if (kontynenty.length) whereConditions.push(`kon.nazwa IN (${kontynentyPlaceholders})`);
  if (kraje.length) whereConditions.push(`k.nazwa IN (${krajePlaceholders})`);
  if (miasta.length) whereConditions.push(`m.nazwa IN (${miastaPlaceholders})`);
  if (liczbyOsob.length) whereConditions.push(`p.liczba_osob IN (${liczbyOsobPlaceholders})`);

  const whereClause = whereConditions.length ? whereConditions.join(' AND ') : '1'; // '1' oznacza, że warunek zawsze będzie prawdziwy.

  const query = `
      SELECT p.*, h.nazwa AS nazwa_hotelu, h.liczba_gwiazdek, k.nazwa AS nazwa_kraju, m.nazwa AS nazwa_miasta
      FROM pokoje p
      JOIN kontynenty kon ON p.id_kontynentu = kon.id_kontynentu
      JOIN kraje k ON p.id_kraju = k.id_kraju
      JOIN miasta m ON p.id_miasta = m.id_miasta
      JOIN hotele h ON p.id_hotelu = h.id_hotelu
      WHERE ${whereClause}
      AND (p.od_kiedy_dostepny <= ? OR p.od_kiedy_dostepny IS NULL)
      ORDER BY h.nazwa
  `;

  // Połącz wszystkie tablice i dodaj datę rozpoczęcia na końcu.
  const queryParams = [...kontynenty, ...kraje, ...miasta, ...liczbyOsob, new Date(dataRozpoczecia)];

  connection.query(query, queryParams, (err, results) => {
      if (err) {
          console.error('Error executing the query:', err);
          res.status(500).json({ error: 'Error executing the query', details: err.message });
          return;
      }
      res.json(results);
  });
});

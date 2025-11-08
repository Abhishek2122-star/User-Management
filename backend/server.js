
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// ✅ GET all users
app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// ✅ POST new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, name, email });
  });
});

// ✅ PUT update user
app.put('/api/users/:id', (req, res) => {
  const { name, email } = req.body;
  const id = req.params.id;
  db.query('UPDATE users SET name=?, email=? WHERE id=?', [name, email, id], (err) => {
    if (err) throw err;
    res.json({ message: 'User updated successfully' });
  });
});

// ✅ DELETE user
app.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM users WHERE id=?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'User deleted successfully' });
  });
});

app.listen(5000, () => console.log('🚀 Backend running on port 5000'));

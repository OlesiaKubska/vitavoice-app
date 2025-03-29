import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('VitaVoice API działa.');
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Otrzymano wiadomość kontaktową:', name, email, message);
  res.status(200).json({ success: true, message: 'Wiadomość została wysłana!' });
});

app.listen(PORT, () => {
  console.log(`Server uruchomiony na porcie ${PORT}`);
});
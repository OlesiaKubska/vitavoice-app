import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('VitaVoice API is running.');
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact message:', name, email, message);
  res.status(200).json({ success: true, message: 'Message sent successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
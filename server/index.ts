import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (_req, res) => {
  res.send('Hello world!');
});

app.get('/api/slow', (req, res) => {
  const { delay = 5000 } = req.query;
  setTimeout(() => {
    res.json({
      data: ['Data 1', 'Data 2', 'Data 3'],
    });
  }, +delay);
});

app.get('/api/slow-img', (req, res) => {
  const { delay = 5000 } = req.query;
  setTimeout(async () => {
    const URL =
      'https://images.unsplash.com/photo-1684125224205-603f78e0fab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=100';
    const response = await axios.get(URL, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'utf-8');
    res.status(200).send(buffer);
  }, +delay);
});

app.listen(8000, () => {
  console.log('Server listening on port 3000');
});

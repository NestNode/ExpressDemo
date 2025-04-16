import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 24052;

app.use(cors()); // 启用CORS

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 心跳检测端点
app.get('/heartbeat', (req, res) => {
  res.status(200).json({
    status: 'alive',
    timestamp: Date.now()
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

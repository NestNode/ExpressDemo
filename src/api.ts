import express, { Application, Express } from 'express';
import cors from 'cors';
import { register } from 'module';

export default class API {
  private app: Express;

  constructor() {
    this.app = express()
    this.app.use(express.json()) // JSON解析中间件
    this.app.use(cors()) // 启用CORS
    this.app.use(express.urlencoded({ extended: true }))

    this.registerAPI()
  }

  startServer(_port:number|null = null): void {
    const port = _port || process.env.PORT || 24052;
    this.app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  }
  
  registerAPI() {
    // 默认
    this.app.get('/', (req, res) => {
      res.send('Hello World!')
    })

    // 心跳检测端点
    this.app.get('/heartbeat', (req, res) => {
      res.status(200).json({
        status: 'alive',
        timestamp: Date.now()
      });
    });

    this.registerAPI_nodedata()

    // 错误
    // this.app.use((err, req, res, next) => {
    //   console.error(err.stack)
    //   res.status(500).send('Something broke!')
    // })
  }

  // nodedata 的 Restful API
  private nodedata: string|object = {}
  registerAPI_nodedata() {
    const router = express.Router()
    this.app.use('/nodedata', router)

    // 增
    router.post('/:id', (req, res) => {});

    // 删
    router.delete('/:id', (req, res) => {})

    // 改
    router.put('/', (req, res) => {
      if (!req.body || Object.keys(req.body).length === 0) {
        res.status(400).json({ error: 'Empty request body' })
        return
      }

      console.log(`router put ----------------------\n    ${JSON.stringify(this.nodedata)} ->\n    ${JSON.stringify(req.body.data)}`)
      this.nodedata = req.body.data
      res.json({
        code: 0,
        data:  this.nodedata
      });
    });

    // 查
    router.get('/', (req, res) => {
      res.json({
        code: 0,
        data:  this.nodedata
      });
    })

    // router.get('/:id', (req, res) => {
    // })
  }
}

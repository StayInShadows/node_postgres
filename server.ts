import * as express from "express";
import * as bodyParser from "body-parser";
import { Postgres } from "./pg_connector";

export class Server {
  private app: express.Application;
  private port : number;
  private postgres = new Postgres();
  constructor(private p: number){
    this.port = p;
    this.app = express();
    this.initialize();

  }

  start(): void {
    this.app.listen(this.port, () => console.log('slucham'))
  }

  private initialize(): void {
    this.app.use(bodyParser.json());

    this.app.get('/', (req,res) =>{
      res.status(200).send('Otrzymano request GET');

    })

    this.app.post('/', (req,res) =>{
      this.postgres.insert(req.body);
      res.status(201).send('Otrzymano request POST');
    })
  }
}

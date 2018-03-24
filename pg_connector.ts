import {Client} from "pg";
import * as fs from "fs";

export class Postgres{
  private con : Client;

  constructor(){
    this.con = new Client({
      user: 'user',
      host: 'localhost',
      database: 'postgres',
      password: 'qwerty123',
      port: 5432
    });
    this.con.connect();
  }

  insert(dane : JSON) : void{
    this.con.query('insert into tst.test_table values ($1, $2)', [dane["uid"], dane["name"]]);
  }

}

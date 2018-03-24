"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pg_1 = require("pg");
var Postgres = /** @class */ (function () {
    function Postgres() {
        this.con = new pg_1.Client({
            user: 'user',
            host: 'localhost',
            database: 'postgres',
            password: 'qwerty123',
            port: 5432
        });
        this.con.connect();
    }
    Postgres.prototype.insert = function (dane) {
        this.con.query('insert into tst.test_table values ($1, $2)', [dane["uid"], dane["name"]]);
    };
    return Postgres;
}());
exports.Postgres = Postgres;

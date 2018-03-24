"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var pg_connector_1 = require("./pg_connector");
var Server = /** @class */ (function () {
    function Server(p) {
        this.p = p;
        this.postgres = new pg_connector_1.Postgres();
        this.port = p;
        this.app = express();
        this.initialize();
    }
    Server.prototype.start = function () {
        this.app.listen(this.port, function () { return console.log('slucham'); });
    };
    Server.prototype.initialize = function () {
        var _this = this;
        this.app.use(bodyParser.json());
        this.app.get('/', function (req, res) {
            res.status(200).send('Otrzymano request GET');
        });
        this.app.post('/', function (req, res) {
            _this.postgres.insert(req.body);
            res.status(201).send('Otrzymano request POST');
        });
    };
    return Server;
}());
exports.Server = Server;

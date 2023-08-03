"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const Collection_1 = require("./Collection");
class DataStore {
    constructor(dir) {
        this.dir = dir;
        if (!fs_1.existsSync(dir)) {
            fs_1.mkdirSync(dir);
        }
        this.dir = dir;
    }
    collection(name) {
        return new Collection_1.Collection(this.dir, name);
    }
}
exports.DataStore = DataStore;

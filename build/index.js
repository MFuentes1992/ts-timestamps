"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const port = "3000";
server_1.default.listen(port, () => {
    console.log(`App => http://localhost:${port}/api/`);
});

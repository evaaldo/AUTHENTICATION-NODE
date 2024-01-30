"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(routes_1.router);
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const port = 3000;
mongoose_1.default.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.jxftrbo.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    exports.app.listen(port, () => console.log(`Server is running in http://localhost:${port}`));
}).catch((error) => console.log(error));

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("./middlewares/cors"));
const index_1 = __importDefault(require("./router/index"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(cors_1.default);
app.use(express_1.default.static(path_1.default.resolve(__dirname, "utils", "tmp")));
app.use(express_1.default.json());
app.use(index_1.default);
exports.default = app;

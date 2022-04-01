"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PhotoSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    key: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
exports.default = (0, mongoose_1.model)("photos", PhotoSchema);

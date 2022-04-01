"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    verificationToken: {
        type: String,
        require: true
    },
    verificationTokenExpiryTime: {
        type: Number,
        require: false
    },
    verifiedEmail: {
        type: Boolean,
        require: false
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
exports.default = (0, mongoose_1.model)("users", UserSchema);

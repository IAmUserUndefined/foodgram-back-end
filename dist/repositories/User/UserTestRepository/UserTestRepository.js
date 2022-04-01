"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTestRepository = void 0;
require("../../../database/index");
const User_1 = __importDefault(require("../../../database/models/User"));
class UserTestRepository {
    createTestUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.create({
                    _id: "aa98bc1b-22f4-4fc6-be64-3d830068bddc",
                    email: "joao@teste.com",
                    name: "João Pedro",
                    password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
                    verificationToken: "544f818f5f5cd4cde44c611683fc71",
                    verifiedEmail: true,
                    verificationTokenExpiryTime: 16333909805121
                });
                yield User_1.default.create({
                    _id: "ff98bc1b-22f4-4fc6-be64-3d830068bzaa",
                    email: "joao1000@teste.com",
                    name: "João Pedro",
                    password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
                    verificationToken: "216d685d384626d9a575629dc38e88",
                    verifiedEmail: false
                });
                yield User_1.default.create({
                    _id: "fe98bc1b-22f4-4fc6-be64-3d830068bddd",
                    email: "joao5000@teste.com",
                    name: "João Pedro",
                    password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
                    verificationToken: "544f818f5f5cd4cde44c611683fc71",
                    verifiedEmail: true,
                    verificationTokenExpiryTime: 0
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    deleteTestUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.deleteMany({});
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.UserTestRepository = UserTestRepository;

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
exports.UserRepository = void 0;
require("../../../database/index");
const User_1 = __importDefault(require("../../../database/models/User"));
class UserRepository {
    store(id, email, name, hash, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.create({
                    _id: id,
                    email: email,
                    name: name,
                    password: hash,
                    verificationToken: token,
                    verificationTokenExpiryTime: 0
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    verifyEmail(email, token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.updateOne({
                    email: email,
                    verificationToken: token
                }, { verifiedEmail: true });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getName(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = yield User_1.default.findOne({
                    _id: id
                });
                return name;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateName(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.updateOne({ _id: id }, { name: name });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.deleteOne({ _id: id });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    findEmailById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = yield User_1.default.findOne({ _id: id });
                return email;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    findEmailByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userEmail = yield User_1.default.findOne({ email: email });
                return userEmail ? userEmail.email : null;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    findByEmailVerified(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield User_1.default.findOne({
                    email: email,
                    verifiedEmail: true
                });
                const userEmail = user ? user.email : null;
                return userEmail;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getId(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { _id } = yield User_1.default.findOne({
                    email: email
                });
                return _id;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getPasswordByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { password } = yield User_1.default.findOne({
                    email: email
                });
                return password;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getPasswordById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { password } = yield User_1.default.findOne({
                    _id: id
                });
                return password;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getVerificationTokenById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { verificationToken } = yield User_1.default.findOne({
                    _id: id,
                });
                return verificationToken;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getVerificationTokenByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { verificationToken } = yield User_1.default.findOne({
                    email: email,
                });
                return verificationToken;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateVerificationTokenById(id, verificationToken) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.updateOne({ _id: id }, { verificationToken: verificationToken });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateVerificationTokenByEmail(email, verificationToken) {
        return __awaiter(this, void 0, void 0, function* () {
            yield User_1.default.updateOne({ email: email }, { verificationToken: verificationToken });
        });
    }
    getVerificationTokenExpiryDateById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { verificationTokenExpiryTime } = yield User_1.default.findOne({
                    _id: id,
                });
                return verificationTokenExpiryTime;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getVerificationTokenExpiryDateByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { verificationTokenExpiryTime } = yield User_1.default.findOne({
                    email: email,
                });
                return verificationTokenExpiryTime;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateVerificationTokenExpiryDateById(id, verificationTokenExpiryDate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.updateOne({ _id: id }, { verificationTokenExpiryTime: verificationTokenExpiryDate });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateVerificationTokenExpiryDateByEmail(email, verificationTokenExpiryDate) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.updateOne({ email: email }, { verificationTokenExpiryTime: verificationTokenExpiryDate });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updateEmail(id, email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.updateOne({ _id: id }, { email: email });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updatePasswordById(id, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.updateOne({ _id: id }, { password: password });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    updatePasswordByEmail(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield User_1.default.updateOne({ email: email }, { password: password });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.UserRepository = UserRepository;

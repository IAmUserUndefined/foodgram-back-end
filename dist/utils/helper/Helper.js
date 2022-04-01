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
require("dotenv/config");
const errors_1 = require("../errors");
const uuid_1 = require("uuid");
const bcryptjs_1 = require("bcryptjs");
const crypto_1 = __importDefault(require("crypto"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
class Helper {
    static createId() {
        return (0, uuid_1.v4)();
    }
    static createToken() {
        return crypto_1.default.randomBytes(15).toString("hex");
    }
    static encryptPassword(password) {
        return (0, bcryptjs_1.hashSync)(password, 10);
    }
    static compareEncryptPassword(password, userPassword) {
        return (0, bcryptjs_1.compareSync)(password, userPassword);
    }
    static getAppUrlEnvironmentVariable() {
        return process.env.APP_URL;
    }
    static getApiUrlEnvironmentVariable() {
        return process.env.API_URL;
    }
    static getEmailEnvironmentVariable() {
        return process.env.EMAIL;
    }
    static getEmailPasswordEnvironmentVariable() {
        return process.env.EMAIL_PASSWORD;
    }
    static getSecretKeyJwtEnvironmentVariable() {
        return process.env.SECRET_KEY_JWT;
    }
    static getAwsAccessKeyEnvironmentVariable() {
        return process.env.AWS_ACCESS_KEY_ID;
    }
    static getAwsAccessSecretKeyEnvironmentVariable() {
        return process.env.AWS_SECRET_KEY_ID;
    }
    static getAwsDefaultRegionEnvironmentVariable() {
        return process.env.AWS_DEFAULT_REGION;
    }
    static getStorageEnvironmentVariable() {
        return process.env.STORAGE;
    }
    static getBucketNamenvironmentVariable() {
        return process.env.BUCKET_NAME;
    }
    static getDatabaseUrlEnvironmentVariable() {
        return process.env.DATABASE_URL;
    }
    static removeFileAws(key) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const s3 = new aws_sdk_1.default.S3({
                    accessKeyId: this.getAwsAccessKeyEnvironmentVariable(),
                    secretAccessKey: this.getAwsAccessSecretKeyEnvironmentVariable(),
                    region: this.getAwsDefaultRegionEnvironmentVariable()
                });
                s3.deleteObject({
                    Bucket: this.getBucketNamenvironmentVariable(),
                    Key: key
                }).promise();
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    static isPasswordValid(password) {
        return {
            result: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?:([0-9a-zA-Z])){8,}$/.test(password),
            message: "Sua senha precisa ter 8 caracteres, uma letra maiúscula, uma minúscula e um número"
        };
    }
    static createJwt(user) {
        return jsonwebtoken_1.default.sign(user, this.getSecretKeyJwtEnvironmentVariable(), { expiresIn: 7200 });
    }
    static jwtVerify(tokenJwt) {
        try {
            const decode = jsonwebtoken_1.default.verify(tokenJwt, this.getSecretKeyJwtEnvironmentVariable());
            return decode;
        }
        catch (_a) {
            return new errors_1.UnauthorizedError("Token Inválido, logue-se novamente");
        }
    }
    static createTokenExpiryDate() {
        return new Date().setMinutes(new Date().getMinutes() + 10);
    }
    static deleteFile(filename) {
        fs_1.default.unlinkSync(path_1.default.resolve(__dirname, "..", "tmp", filename));
    }
}
exports.default = Helper;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../utils/errors/index");
const Helper_1 = __importDefault(require("../utils/helper/Helper"));
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const storageTypes = {
    local: multer_1.default.diskStorage({
        destination: (req, file, callback) => callback(null, "src/utils/tmp"),
        filename: (req, file, callback) => callback(null, `${Date.now()}-${file.originalname}`)
    }),
    s3: (0, multer_s3_1.default)({
        s3: new aws_sdk_1.default.S3({
            accessKeyId: Helper_1.default.getAwsAccessKeyEnvironmentVariable(),
            secretAccessKey: Helper_1.default.getAwsAccessSecretKeyEnvironmentVariable(),
            region: Helper_1.default.getAwsDefaultRegionEnvironmentVariable()
        }),
        bucket: Helper_1.default.getBucketNamenvironmentVariable(),
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (req, file, callback) => callback(null, `${Date.now()}-${file.originalname}`)
    })
};
const multerConfig = {
    dest: path_1.default.resolve(__dirname, "..", "utils", "tmp"),
    storage: storageTypes[Helper_1.default.getStorageEnvironmentVariable()],
    limits: { fileSize: 1024 * 1024 },
    fileFilter: (req, file, callback) => {
        const allowedTypes = [
            "image/jpeg",
            "image/png"
        ];
        if (allowedTypes.includes(file.mimetype))
            return callback(null, true);
        callback(new index_1.InvalidParamError("Tipo de Arquivo inválido, a imagem precisa estar em formato JPEG ou PNG"));
    }
};
exports.default = (0, multer_1.default)(multerConfig).single("file");

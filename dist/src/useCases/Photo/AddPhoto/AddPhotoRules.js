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
const errors_1 = require("../../../utils/errors");
const PhotoRepository_1 = require("../../../repositories/Photo/PhotoRepository/PhotoRepository");
const Helper_1 = __importDefault(require("../../../utils/helper/Helper"));
class AddPhotoRules {
    constructor() {
        this.repository = new PhotoRepository_1.PhotoRepository();
    }
    execute({ userId, filename, originalname, location, key }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!filename && !location)
                return new errors_1.MissingParamError("Houve um problema no downlodad da foto, tente novamente");
            const url = location || `${Helper_1.default.getApiUrlEnvironmentVariable()}/${filename}`;
            const photoKey = filename || key;
            yield this.repository.store(Helper_1.default.createId(), userId, url, originalname, photoKey);
            return "Foto adicionada com sucesso";
        });
    }
}
exports.default = AddPhotoRules;

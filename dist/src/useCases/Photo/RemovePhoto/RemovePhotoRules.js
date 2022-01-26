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
const PhotoRepository_1 = require("../../../repositories/Photo/PhotoRepository/PhotoRepository");
const Helper_1 = __importDefault(require("../../../utils/helper/Helper"));
class RemovePhotoRules {
    constructor() {
        this.repository = new PhotoRepository_1.PhotoRepository();
    }
    execute({ photoId, key }) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.destroy(photoId);
            if (Helper_1.default.getStorageEnvironmentVariable() === "s3") {
                Helper_1.default.removeFileAws(key);
            }
            else {
                Helper_1.default.deleteFile(key);
            }
            return "Foto excluída com sucesso";
        });
    }
}
exports.default = RemovePhotoRules;

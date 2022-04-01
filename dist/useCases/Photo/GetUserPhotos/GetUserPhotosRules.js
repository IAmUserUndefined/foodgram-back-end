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
Object.defineProperty(exports, "__esModule", { value: true });
const PhotoRepository_1 = require("../../../repositories/Photo/PhotoRepository/PhotoRepository");
class GetUserPhotoRules {
    constructor() {
        this.repository = new PhotoRepository_1.PhotoRepository();
    }
    execute({ userId }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.getUserPhotos(userId);
        });
    }
}
exports.default = GetUserPhotoRules;

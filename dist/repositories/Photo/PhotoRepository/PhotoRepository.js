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
exports.PhotoRepository = void 0;
require("../../../database/index");
const Photo_1 = __importDefault(require("../../../database/models/Photo"));
class PhotoRepository {
    store(id, userId, url, originalname, filename) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Photo_1.default.create({
                    _id: id,
                    userId: userId,
                    url: url,
                    name: originalname,
                    key: filename,
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getPhotos() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const photo = yield Photo_1.default.find({});
                const objects = [];
                photo.map((object) => {
                    const photo = {
                        _id: object._id,
                        id: object._id,
                        userId: object.userId,
                        url: object.url,
                        name: object.name,
                        key: object.key,
                    };
                    objects.push(photo);
                });
                return objects;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getUserPhotos(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const photo = yield Photo_1.default.find({ userId: userId });
                const objects = [];
                photo.map((object) => {
                    const photo = {
                        _id: object._id,
                        id: object._id,
                        userId: object.userId,
                        url: object.url,
                        name: object.name,
                        key: object.key,
                    };
                    objects.push(photo);
                });
                return objects;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Photo_1.default.deleteOne({
                    _id: id
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.PhotoRepository = PhotoRepository;

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
const index_1 = __importDefault(require("../../../../prisma/index"));
class PhotoRepository {
    store(id, userId, url, originalname, filename) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.photo.create({
                    data: {
                        id: id,
                        userId: userId,
                        url: url,
                        name: originalname,
                        key: filename,
                    }
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
                return yield index_1.default.photo.findMany({
                    orderBy: {
                        createdAt: "desc"
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    getUserPhotos(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield index_1.default.photo.findMany({
                    where: {
                        userId: userId
                    },
                    orderBy: {
                        createdAt: "desc"
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield index_1.default.photo.delete({
                    where: {
                        id: id
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.PhotoRepository = PhotoRepository;

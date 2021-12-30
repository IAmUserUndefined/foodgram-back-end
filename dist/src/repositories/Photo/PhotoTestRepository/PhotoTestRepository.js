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
exports.PhotoTestRepository = void 0;
const index_1 = __importDefault(require("../../../../prisma/index"));
class PhotoTestRepository {
    createTestPhoto() {
        return __awaiter(this, void 0, void 0, function* () {
            yield index_1.default.user.create({
                data: {
                    id: "aa98bc1b-22f4-4fc6-be64-3d830068bdqqaaaaaaaa",
                    email: "joao@teste.com",
                    name: "João Pedro",
                    password: "$2a$10$qccZ2L8csoUcHQR1mMFkJulToLLZTe7Xo7DnM19dV4Ly3r1OkBg6S",
                    verificationToken: "544f818f5f5cd4cde44c611683fc71",
                    verifiedEmail: true
                }
            });
        });
    }
    getPhotos() {
        return __awaiter(this, void 0, void 0, function* () {
            const photo = yield index_1.default.photo.findMany();
            return photo;
        });
    }
    deleteTestPhoto() {
        return __awaiter(this, void 0, void 0, function* () {
            yield index_1.default.photo.deleteMany({});
            yield index_1.default.user.deleteMany({});
        });
    }
}
exports.PhotoTestRepository = PhotoTestRepository;

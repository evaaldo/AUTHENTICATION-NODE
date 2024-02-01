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
exports.UserService = void 0;
const User_1 = __importDefault(require("../models/User"));
class UserService {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.default.find();
            return users;
        });
    }
    createUser(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = crypto.randomUUID();
            const user = new User_1.default({ userId, username, password });
            try {
                yield user.save();
            }
            catch (error) {
                throw error;
            }
        });
    }
    updateUser(userId, username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.updateOne({ userId: userId }, { username: username, password: password });
        });
    }
    deleteUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.deleteOne({ userId: userId });
        });
    }
}
exports.UserService = UserService;

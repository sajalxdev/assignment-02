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
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./utils/config"));
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    mongoose_1.default
        .connect(config_1.default.DATABASE_URL)
        .then(() => {
        console.log("Connected to database");
        // Start the server
        app_1.default.listen(config_1.default.PORT, () => {
            console.log(`Server started on http://localhost:${config_1.default.PORT}`);
        });
    })
        .catch((error) => {
        console.error("Error connecting to database: ", error.message);
    });
});
main();

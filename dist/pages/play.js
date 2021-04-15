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
const pokemonAPI_1 = require("../api/pokemonAPI");
const playGame_1 = require("../compontent/playGame");
const Play = {
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield pokemonAPI_1.default.pokemonAPI();
            return /*html*/ `
            <div class="logo">
                <img class="w-1/6 mx-auto my-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png">
            </div>
            <div class="pokemonItem grid grid-cols-5 mx-96 ">
                ${playGame_1.default.show(data)}
            </div>
        `;
        });
    },
    afterRender() {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield pokemonAPI_1.default.pokemonAPI();
            playGame_1.default.play();
            return ``;
        });
    }
};
exports.default = Play;

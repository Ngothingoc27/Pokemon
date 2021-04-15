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
const axiosClient_1 = require("./axiosClient");
class pokemonAPI {
    get(id) {
        let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        return axiosClient_1.axiosClient.get(url);
    }
    pokemonAPI() {
        return __awaiter(this, void 0, void 0, function* () {
            let pokemonArr = [];
            for (let i = 1; i <= 10; i++) {
                let { data: pokemon } = yield this.get(i);
                pokemonArr = [...pokemonArr, { id: pokemon.id, name: pokemon.name, image: pokemon.sprites.front_shiny }];
            }
            let pokemon_save = [...pokemonArr, ...pokemonArr];
            pokemon_save.sort(() => Math.random() - 0.5);
            return pokemon_save;
        });
    }
}
exports.default = new pokemonAPI;

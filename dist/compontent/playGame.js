"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
class pokemons {
    show(data) {
        let pokemonHTML = "";
        data.forEach((pokemon, index) => {
            pokemonHTML += /*html*/ `
                <div class="item border-2 bg-white" id_pokemon="${pokemon.id}" index="${index}">
                    <img src="${pokemon.image}" class="ml-7 bg-white">
                </div> 
            `;
        });
        return pokemonHTML;
    }
    test() {
        console.log("khổ vc ");
    }
    play(data) {
        let pokemonElement = utils_1.$(".pokemonItem");
        let box = utils_1.$('.item');
        //console.log(box);
        let click = 0;
        let save_arr = [];
        if (data) {
            click = 0;
            save_arr = [];
            pokemonElement.innerHTML = this.show(data);
        }
        box.forEach((curren_value) => {
            curren_value.addEventListener('click', click_function);
        });
        function click_function() {
            this.removeEventListener('click', click_function);
            //this.classList.add()
            click++;
            save_arr = [...save_arr, this];
            console.log(save_arr);
            if (save_arr.length >= 2) {
                click = 0;
                if (save_arr[0].getAttribute("id_pokemon") ==
                    save_arr[1].getAttribute("id_pokemon")) {
                    save_arr.forEach((curren_value) => {
                        curren_value.removeEventListener('click', click_function);
                        curren_value.style.visibility = "hidden";
                    });
                }
                else {
                    save_arr.forEach((curren_value) => {
                        curren_value.addEventListener('click', click_function);
                        //curren_value.classList.remove();
                    });
                }
                save_arr = [];
            }
        }
    }
}
exports.default = new pokemons();

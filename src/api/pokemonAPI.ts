import { axiosClient } from './axiosClient';

class pokemonAPI {
    get <T = string> (id:T):Promise<any>{
         let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        return axiosClient.get(url);
    }

    async pokemonAPI() {
        let pokemonArr: Array<object> = [];

        for(let i=1; i<=10; i++) {
            let { data : pokemon } = await this.get<number>(i);

            pokemonArr = [...pokemonArr, {id: pokemon.id, name: pokemon.name, image: pokemon.sprites.front_shiny }];
        }
        let pokemon_save = [...pokemonArr, ...pokemonArr];
        pokemon_save.sort(() => Math.random() - 0.5);
        return pokemon_save
    }
}

export default new pokemonAPI;
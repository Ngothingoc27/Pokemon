import { $ } from '../utils';
import pokemonAPI from '../api/pokemonAPI';

class pokemons {
    show<T extends object[]>(data: T): string{
        let pokemonHTML: string = "";
        data.forEach((pokemon: any, index) => {
            pokemonHTML += /*html*/`
                <div class="item border-2 bg-white" id_pokemon="${pokemon.id}" index="${index}">
                    <img src="${pokemon.image}" class="ml-7 bg-white">
                </div> 
            `
        })
        return pokemonHTML;
    }

    test(){
        console.log("khổ vc ");
    }

    play<T extends Array<object>>(data?: T): void{
        let pokemonElement = $(".pokemonItem") as HTMLDivElement;
        let box = $('.item') as Array<HTMLDivElement>;
        //console.log(box);
        
        let click = 0;
        let save_arr : any[] = [];

        if(data) {
            click = 0;
            save_arr = [];
            pokemonElement.innerHTML = this.show(data);
        }
        box.forEach((curren_value) => {
            curren_value.addEventListener('click', click_function);
        });

        function click_function(this: HTMLDivElement) {
            this.removeEventListener('click', click_function);
            //this.classList.add()
            click++;
            save_arr = [...save_arr, this];
            console.log(save_arr);

            if(save_arr.length>=2){
                click = 0;
                if(
                   (save_arr[0] as HTMLDivElement).getAttribute("id_pokemon") == 
                   (save_arr[1] as HTMLDivElement).getAttribute("id_pokemon")
                ){
                    save_arr.forEach((curren_value: HTMLDivElement) => {
                        curren_value.removeEventListener('click', click_function);
                        curren_value.style.visibility = "hidden";
                    })
                }else{
                    save_arr.forEach((curren_value: HTMLDivElement) => {
                        curren_value.addEventListener('click', click_function);
                        //curren_value.classList.remove();
                    })
                }
            save_arr = []
            }
        }

    }
}

export default new pokemons();
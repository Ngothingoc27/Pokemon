import pokemonAPI from '../api/pokemonAPI'
import playGame from '../compontent/playGame';

const  Play = {
    async render(){
        let data = await pokemonAPI.pokemonAPI();

        return  /*html*/`
            <div class="logo">
                <img class="w-1/6 mx-auto my-12" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png">
            </div>
            <div class="pokemonItem grid grid-cols-5 mx-96 ">
                ${playGame.show<object[]>(data)}
            </div>
        `
    },
    async afterRender(){
        let data = await pokemonAPI.pokemonAPI();
        playGame.play();
        return ``;
    }
}
export default Play;
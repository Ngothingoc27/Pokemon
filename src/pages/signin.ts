const Signin = {
    async render() {
        return /*html*/`
            <div class="logo">
                <img class="w-1/6 mx-auto mt-16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png">
            </div>
            <form class="w-1/4 mx-auto my-16">
                
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label text-xl">Username</label>
                    <input type="text" class="form-control">
                </div>
                <a href="/#/play"><button type="button" class="btn btn-dark">Play Game</button></a>
            </form>
        `;
    },
    async afterRender(){

    }

}

export default Signin;
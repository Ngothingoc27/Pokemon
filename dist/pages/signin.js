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
const Signin = {
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            return /*html*/ `
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
        });
    },
    afterRender() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
};
exports.default = Signin;

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
const play_1 = require("./pages/play");
const signin_1 = require("./pages/signin");
const utils_1 = require("./utils");
const routes = {
    '/': signin_1.default,
    '/play': play_1.default
};
const router = () => __awaiter(void 0, void 0, void 0, function* () {
    const { resource, id } = utils_1.parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') +
        (id ? `/:id` : '');
    const page = routes[parseUrl] ? routes[parseUrl] : 'Error Page';
    document.querySelector('.main-content').innerHTML = yield page.render();
    yield page.afterRender();
});
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);

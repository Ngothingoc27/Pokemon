"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosClient = void 0;
const axios_1 = require("axios");
exports.axiosClient = axios_1.default.create({
    baseURL: 'https://pokeapi.co',
    headers: {
        'Content-Type': 'application/json',
    },
});

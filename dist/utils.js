"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ = exports.parseRequestUrl = void 0;
const parseRequestUrl = () => {
    const url = window.location.hash.toLowerCase();
    const request = url.split('/');
    return {
        resource: request[1],
        id: request[2]
    };
};
exports.parseRequestUrl = parseRequestUrl;
const $ = selector => {
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : elements;
};
exports.$ = $;

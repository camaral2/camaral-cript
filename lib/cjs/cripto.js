"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cripto = void 0;
const cripto = (texto, key) => {
    return { hash: texto + key, salt: 10 };
};
exports.cripto = cripto;

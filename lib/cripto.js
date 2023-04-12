export const cripto = (texto, key) => {
    return { hash: texto + key, salt: 10 };
};

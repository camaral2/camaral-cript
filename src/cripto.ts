export type criptoType = {
    hash: string;
    salt: number;
};
export const cripto = (texto: string, key: string): criptoType => {
    return { hash: texto + key, salt: 10 };
}

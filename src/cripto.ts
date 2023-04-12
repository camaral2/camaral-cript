export type criptoType = {
    hash: string;
    salt: number;
};
export declare const cripto: (texto: string, key: string) => criptoType;

import * as crypto from "crypto";

export type criptoType = {
    hash: string;
};
export const CaCripto = (texto: string, secretKey: string): criptoType => {
    const hash = crypto.createHmac('sha512', secretKey);
    hash.update(texto, 'utf-8');

    return { hash: hash.digest('hex')};
}

export declare function generateSin(): any;
export declare function getPublicKeyFromPrivateKey(privkey: string): string;
export declare function sign(data: any, privkey: string): string;
export declare function getSinFromPublicKey(pubkey: string): string;
export declare function verifySignature(data: any, pubkey: string, hexsignature: string): boolean;
export declare function validateSign(sin: string): boolean;
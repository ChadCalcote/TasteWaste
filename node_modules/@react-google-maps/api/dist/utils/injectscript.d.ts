interface InjectScriptArg {
    url: string;
    id: string;
    nonce?: string;
}
export declare const injectScript: ({ url, id, nonce }: InjectScriptArg) => Promise<any>;
export {};

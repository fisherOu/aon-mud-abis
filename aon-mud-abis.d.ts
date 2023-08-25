// aon-mud-abis.d.ts

declare module "aon-mud-abis" {

    export interface SystemTypes {
        [key: string]: string;
    }

    export interface SystemAbis {
        [contractName: string]: {
            [functionName: string]: string;
        };
    }

    const systemTypes: SystemTypes;

    const abis: SystemAbis;

    export {
        systemTypes,
        abis
    };

}

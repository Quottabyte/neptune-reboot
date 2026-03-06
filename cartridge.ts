namespace neptune {
    /* The class for cartridges */

    export class Cartridge {
        _sid: string;
        _lf: Function;

        constructor(stringID: string, loadFunction: Function) {
            this._sid = stringID;
            this._lf = loadFunction;
        }

        get stringId(): string {
            return this._sid;
        }

        get loadFunction(): Function {
            return this._lf;
        }

        set stringId(i: string) {
            this.stringId = i;
        }

        set loadFunction(i: Function) {
            this.loadFunction = i;
        }
    }

    export function createCart(id: string, loadFunction: Function): Cartridge {
        const createdCart = new Cartridge(id, loadFunction);

        console.log("(" + control.programName() + ") Registered new Cartridge: " + id);
        return createdCart;
    }
}
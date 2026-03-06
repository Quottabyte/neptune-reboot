namespace neptune {
    export let currentlyLoadedCart: Cartridge;

    export function loadCart(cartToLoad: Cartridge) {
        const load: Function = cartToLoad.loadFunction();

        if (cartToLoad != null) {
            currentlyLoadedCart = cartToLoad;
            load();
        }
    }

    export function crash(reason: string) {
        control.fail(reason);
    }

    export function isUnder(program: string) {
        return control.programName() == program;
    }
}
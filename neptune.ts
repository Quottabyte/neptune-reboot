/**
 * Neptune blocks
 */
//% groups='["Registration", "Implementation", "Util"]'
//% weight=40 color=#593ec7 icon="\uf135"
namespace neptune {
    /**
     * The currently loaded Cartridge.
     */
    //% block
    export let currentlyLoadedCart: Cartridge;

    /**
     * The currently bootstrapped Plugin.
     */
    //% block
    export let currentlyBootstrappedPlugin: Plugin;

    /**
     * Throws a Fatal Error using a given string. Will stop the game forcefully, proceed with caution.
     * @param reason The reason for throwing a Fatal Error
     */
    //% block
    //% group="Util"
    export function crash(reason: string) {
        control.fail(reason);
    }

    /**
     * Checks if the current program name equals a given string.
     * @param program The name of the program you want to check for (i.e) "Neptune". Use the name of your project, in the bottom left.
     */
    //% block
    //% group="Util"
    export function isUnder(program: string): boolean {
        return control.programName() == program;
    }

    /**
     * Loads a Cartridge.
     * @param cartToLoad The Cartridge to load.
     */
    //% block
    //% group="Implementation"
    export function loadCart(cartToLoad: Cartridge) {
        const load: Function = cartToLoad.loadFunction();

        if (cartToLoad != null) {
            currentlyLoadedCart = cartToLoad;
            load();
            console.log("(" + control.programName() + ") Loaded Cartridge: " + cartToLoad.stringId);
        } else {
            crash("Null Cartridge!");
        }
    }

    /**
     * Bootstraps a Plugin.
     * @param plugin The Plugin to load.
     */
    //% block
    //% group="Implementation"
    export function bootstrapPlugin(plugin: Plugin) {
        const pluginToRun: Function = plugin.plugin();

        if (plugin != null) {
            currentlyBootstrappedPlugin = plugin;
            pluginToRun();
            console.log("(" + control.programName() + ") Bootstrapped plugin: " + plugin.id);
        } else {
            crash("Null Plugin!");
        }
    }

    /**
     * Creates a Cartridge, similar to 'sprites.create'
     * @param id The string Id. Should be in regular spelling, "Test Cart".
     * @param loadFunction The function to load upon the Cartridge being loaded. This function must not use any parameters.
     */
    //% block
    //% group="Registration"
    export function createCart(id: string, loadFunction: Function): Cartridge {
        const createdCart = new Cartridge(id, loadFunction);
        console.log("(" + control.programName() + ") Registered new Cartridge: " + id);
        return createdCart;
    }

    /**
     * Creates a Plugin, similar to 'sprites.create'
     * @param id The string Id. Should be in regular spelling, "Test Plugin".
     * @param plugin The Plugin function to load. This function will be run upon the Plugin being bootstrapped.
     */
    //% block
    //% group="Registration"
    export function createPlugin(id: string, plugin: Function): Plugin {
        const registeredPlugin = new Plugin(id, plugin);
        console.log("(" + control.programName() + ") Registered plugin: " + id);
        return registeredPlugin;
    }
}
/*
Allows for plugins that can modify carts or neptune as a whole
*/

namespace neptune {
    export class Plugin {
        _id: string;
        _plugin: Function;

        constructor(id: string, plugin: Function) {
            this._id = id;
            this._plugin = plugin;
        }

        get id(): string {
            return this._id;
        }

        get plugin(): Function {
            return this._plugin;
        }

        set id(i: string) {
            this.id = i;
        }

        set plugin(i: Function) {
            this.plugin = i;
        }
    }
}
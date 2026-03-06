# Neptune
Neptune is a Cartridge system that allows for more easily stopping and starting entire games in MakeCode, along with storing them more simply.

## Registration
Registration of Carts and Plugins is very simple, and extremely alike (they use the same parameters and format).

To register either a Cart or a Plugin, you'll need a string ID (In normal spelling, i.e "Test Cart"), and a load function.

A load function is a function that is used by a Cart or Plugin, that is run when that Cart is loaded / Plugin is bootstrapped.

This load function will contain all of the code, assets, and functions of your Cartridge. Think of them like little namespaces!

```
    export let exampleCart = neptune.createCart("Example Cart", _exampleCartLoad);

    export function _exampleCartLoad() {
        scene.setBackgroundColor(3);
    }
```
This will register a cart, `exampleCart`, and have the Cart set the background color upon being loaded.

This is similar to Plugins!

```
    export let examplePlugin = neptune.createPlugin("Example Plugin", _examplePluginBootstrap);

    export function _examplePluginBootstrap() {
        scene.setBackgroundColor(3);
    }
```

Now, to load a Cart / bootstrap a Plugin, the code is simple:

```
    neptune.loadCart(exampleCart);
```

```
    neptune.bootstrapPlugin(examplePlugin);
```

And that is pretty much all you need to start making Plugins and Carts!

Currently many desired utilities are not created in the base project, due to unpatchable crashes, such as a list of all Carts or deleting.

# Thank You!
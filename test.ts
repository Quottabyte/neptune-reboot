namespace neptune {
    const bootCart = neptune.createCart("bootCart", bootload);
    const secondBoot = neptune.createCart("secondBoot", boottwo)
    const testPlugin = neptune.createPlugin("Test Plugin", testPluginFunction);

    function testPluginFunction() {
        scene.setBackgroundColor(14);
    }

    function bootload() {
        console.log("gono");
    }

    function boottwo() {
        console.log("gniotn");
    }

    neptune.loadCart(secondBoot);
    neptune.bootstrapPlugin(testPlugin);
}
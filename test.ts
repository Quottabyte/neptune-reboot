namespace neptune {
    const bootCart = neptune.createCart("bootCart", bootload);
    const secondBoot = neptune.createCart("secondBoot", boottwo)
    const testPlugin = neptune.createPlugin("Test Plugin", testPluginFunction);

    function testPluginFunction() {
        let previewSprite = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 f f f f f f f f 1
            1 1 1 1 1 1 1 1 1 1
        `, SpriteKind.Player);
        previewSprite.setPosition(scene.screenWidth() / 2, scene.screenHeight() / 2);
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
// Put this file in Program Files\Adobe\Photoshop\Presets\Scripts\layersToSprite.js
// Run in PhotoShop: File > Scripts > Browse: locate layersToSprite.js and run

// Arrange layers into a sprite sheet.

if (documents.length > 0) {
    var cols = 1;

    // --------------------------
    var docRef = activeDocument;
    var activeLayer = docRef.activeLayer;

    var numLayers = docRef.artLayers.length;

    var rows = Math.ceil(numLayers / cols);

    var spriteX = docRef.width;
    var spriteY = docRef.height;

    // put things in order
    app.preferences.rulerUnits = Units.PIXELS;

    // resize the canvas
    var newX = spriteX * cols;
    var newY = spriteY * rows;

    docRef.resizeCanvas(newX, newY, AnchorPosition.TOPLEFT);

    // move the layers around
    var rowi = 0;
    var coli = 0;

    for (var i = (numLayers - 1); i >= 0; i--) {
        docRef.artLayers[i].visible = 1;

        var movX = spriteX * coli;
        var movY = spriteY * rowi;

        docRef.artLayers[i].translate(movX, movY);

        coli++;
        if (coli > (cols - 1)) {
            rowi++;
            coli = 0;
        }
    }
}

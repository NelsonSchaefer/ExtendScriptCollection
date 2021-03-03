//Running this Script will add an expression to alter the fill of a selected array of shape objects

//the project that is currently loaded
var proj = app.project;

//select first item in item panel. it's the desired composition
var comp = proj.item(1);

//create array with all layers that are selected in After Effects
var layersSelection = comp.selectedLayers;

//define the expression 
var myExpression = "low = thisComp.layer(\"ExpressionControl\").effect(\"ColorScaleLow\")(1); \n high = thisComp.layer(\"ExpressionControl\").effect(\"ColorScaleVeryHigh\")(1); \n e = Math.abs(transform.position[2]) / thisComp.layer(\"ExpressionControl\").effect(\"ExtrusionMaxDepth\")(1); \n f = (high * e) + (low * (1 - e))";

//loop through array and assign expression to each layer
var arrayLength = layersSelection.length;
for (var i = 0; i < arrayLength; i++) {
    layersSelection[i].content("Group 1").content("Fill 1").color.expression = myExpression;
}

//alert when done
alert ("Done");

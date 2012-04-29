function writeMessage(messageshapesLayer, message) {
    var context = messageshapesLayer.getContext();
    messageshapesLayer.clear();
    context.font = "18pt Calibri";
    context.fillStyle = "black";
    context.fillText(message, 10, 25);
}

function loadKineticContent() {
    var stage = new Kinetic.Stage({
		container: "kineticContent",
        width: 578,
        height: 200
    });
	
	var shapesLayer = new Kinetic.Layer();
	var messageLayer = new Kinetic.Layer();

	var width = 100;
	var height = 50;
	
	var rectX = stage.getWidth() / 4 - width / 2;
	var rectY = stage.getHeight() / 2 - height / 2;
	
    var rect = new Kinetic.Rect({
		x: rectX,
        y: rectY,
        width: width,
        height: height,
        fill: "#00D2FF",
        stroke: "black",
        strokeWidth: 4,
		draggable: true,
		rotationDeg: 30
    });
	
	rect.on("click",function() {
		rect.rotate(Math.PI / 6);
		shapesLayer.draw();
	});
	
	rect.on("mouseout", function() {
		writeMessage(messageLayer,"Mouseout Rectangle");
	});
	
	rect.on("mousemove", function() {
        var mousePos = stage.getMousePosition();
        var x = mousePos.x - rectX;
        var y = mousePos.y - rectY;
        writeMessage(messageLayer, "x: " + x + ", y: " + y);
    });
	
	var circle = new Kinetic.Circle({
        x: 3 * stage.getWidth() / 4,
        y: stage.getHeight() / 2,
        radius: 70,
        fill: "red",
        stroke: "black",
        strokeWidth: 4,
		alpha: 0.5
    });
		
    // add the shape to the shapesLayer
    shapesLayer.add(rect);
	shapesLayer.add(circle);

    // add the shapesLayer to the stage
    stage.add(shapesLayer);
	stage.add(messageLayer);
};

window.onload = loadKineticContent;
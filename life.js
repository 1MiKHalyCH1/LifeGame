var matrix = new Array(10);
var matrixNew = new Array(10);

function init() {
    var canvas = document.getElementById("life");
    canvas.width = canvas.height =  500; 
	var context = canvas.getContext("2d");
    
    
    canvas.addEventListener('click', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        newRect(canvas,mousePos);
      }, false);
    
    num = 10; 
    width = canvas.width/num; 
    height = canvas.height/num;

    for (var i = 0; i <= num; i++)
    {
        context.moveTo(i * width, 0);
        context.lineTo(i * width, canvas.height);
        
        context.moveTo(0, i * height);
        context.lineTo(canvas.width,i * height);
    }
    context.stroke();
    
    for (var i = 0; i < num; i++)
    {
        matrix[i] = [];
        matrixNew[i] = [];
        for (var j = 0; j < num; j++)
        {
            matrix[i][j] = false;
            matrixNew[i][j] = false;
        }
    }
}

function next_step() {
    var canvas = document.getElementById("life");
    var context = canvas.getContext("2d");
    
    
    draw();
}

function stop() {
    var canvas = document.getElementById("life");
    var context = canvas.getContext("2d");
    init();
}

function draw() {
    var canvas = document.getElementById("life");
    var context = canvas.getContext("2d");
    
    for (var i = 0; i < num; i++)
        for (var j = 0; j < num; j++)
        {
            if (matrix[i][j])
                context.fillRect(i*50,j*50,50,50);
        }
}

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}

function newRect(canvas,mousePos) {
    var context = canvas.getContext("2d");
    var x = Math.floor(mousePos.x/50);
    var y = Math.floor(mousePos.y/50);
    matrix[x][y] = !matrix[x][y];
    if (matrix[x][y])
        context.fillRect(x*50+1,y*50+1,48,48);
    else
        context.clearRect(x*50+1,y*50+1,48,48);
}
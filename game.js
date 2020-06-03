function load_images(){
    //player,gem and virus
    
}


function init(){
    //define the objects
    canvas = document.getElementById("mycanvas");
    console.log(canvas);
    W = 700;
    H = 400;
    
    canvas.width = W;
    canvas.height = H;
    
    // create a context
    pen = canvas.getContext('2d');
    console.log(pen);
    
    box = {
        x : 150,
        y : 50,
        w : 60,
        h : 60,
        speed : 5
    };
    
}

function draw(){
    
    //clear the prev area
    pen.clearRect(0,0,W,H);
    
    pen.fillStyle = "red";
    pen.fillRect(box.h,box.y,box.w,box.h);
    
}

function update(){
    
    //move the box
    box.y += box.speed;
    
    if(box.y>= H - box.h || box.y < 0){
        box.speed *= -1;
    }
    
}

function gameloop(){
    draw();
    update();
    console.log("In gameloop");
}

load_images();
init();
var f = setInterval(gameloop,100);



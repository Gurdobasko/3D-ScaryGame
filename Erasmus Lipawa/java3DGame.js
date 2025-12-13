//class of players
function player(x,y,z,rotationX,rotationY){
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rotationX;
    this.ry = rotationY;
}
//rectangle array
var map = [
    [0,0,-1000,0,0,0,2000,200,"Patterns/ZniszczonyPlaster.jpg"],
    [0,0,1000,0,0,0,2000,200,"Patterns/Cegła3.jpg"],
    [1000,0,0,0,90,0,2000,200,"Patterns/ZniszczonyPlaster.jpg"],
    [-1000,0,0,0,90,0,2000,200,"Patterns/Cegła4.jpg"],
    [0,100,0,90,0,0,2000,2000,"Patterns/Podłoga.jpg"],
    //okna i drzwi
    [-50,0,-551,0,0,0,100,200,"Patterns/door.jpg"],
    [350,-20,-1000,0,0,0,180,130,"Patterns/window.jpg"],
    [800,-20,-1000,0,0,0,180,130,"Patterns/window.jpg"],
    [1000,-20,-850,0,90,0,180,130,"Patterns/window.jpg"],
    [-1000,-20,0,0,90,0,180,130,"Patterns/window.jpg"],
    [-1000,-20,600,0,90,0,180,130,"Patterns/window.jpg"],
    [250,-20,1000,0,0,0,180,130,"Patterns/window.jpg"],
    //zegary
    [100,-60,1,0,0,0,40,40,"Patterns/zegar.jpg"],
    [-475,-60,201,0,0,0,40,40,"Patterns/zegar.jpg"],
    [-800,-60,901,0,0,0,40,40,"Patterns/zegar.jpg"],
    [850,-60,-599,0,0,0,40,40,"Patterns/zegar.jpg"],
    
    //krew na podłodze
    [100,99,100,90,0,0,200,100,"Patterns/blood1.png"],
    [-900,99,400,90,0,45,200,100,"Patterns/blood1.png"],
    [0,99,-351,90,0,20,300,100,"Patterns/blood1.png"],
    [-900,0,301,0,0,0,200,100,"Patterns/blood2.png"],
    //krzyże
    [-176,0,201,0,90,180,230,200,"Patterns/cross.png"],
    [-900,0,299,0,0,60,230,200,"Patterns/cross.png"],
    //demony
    [810,0,299,0,0,0,120,200,"Patterns/anabelle.jpg"],
    [725,0,-201,0,0,0,300,200,"Patterns/demon1.jpg"],
    [-475,0,199,0,0,0,100,200,"Patterns/valak.jpg"],    
    //wall 1.1
    [675,0,900,0,0,0,650,200,"Patterns/Cegła3.jpg"],
    [675,0,800,0,0,0,650,200,"Patterns/ZniszczonyPlaster.jpg"],
    [350,0,850,0,90,0,100,200,"Patterns/Cegła3.jpg"],

    //wall 1.2
    [-200,0,900,0,0,0,650,200,"Patterns/ZniszczonyPlaster.jpg"],
    [-200,0,800,0,0,0,650,200,"Patterns/Cegła4.jpg"],
    [125,0,850,0,90,0,100,200,"Patterns/Cegła2.jpg"],
    [-525,0,850,0,90,0,100,200,"Patterns/Cegła3.jpg"],

    //wall 1.3
    [-750,0,900,0,0,0,200,200,"Patterns/Cegła3.jpg"],
    [-750,0,800,0,0,0,200,200,"Patterns/Cegła4.jpg"],
    [-850,0,850,0,90,0,100,200,"Patterns/ZniszczonyPlaster.jpg"],
    [-650,0,850,0,90,0,100,200,"Patterns/ZniszczonyPlaster.jpg"],

    //wall 2.1
    [-750,0,125,0,90,0,1350,200,"Patterns/Cegła1.jpg"],
    [-650,0,125,0,90,0,1350,200,"Patterns/ZniszczonyPlaster.jpg"],

    //wall 2.2
    [-750,0,-450,0,0,0,200,200,"Patterns/Cegła1.jpg"],
    [-750,0,-550,0,0,0,200,200,"Patterns/ZniszczonyPlaster.jpg"],
    [-850,0,-500,0,90,0,100,200,"Patterns/Cegła2.jpg"],

    //wall 2.3
    [-875,0,300,0,0,0,250,200,"Patterns/Cegła2.jpg"],

    //wall 2.4
    [-475,0,400,0,0,0,100,200,"Patterns/ZniszczonyPlaster.jpg"],
    [-525,0,650,0,90,0,500,200,"Patterns/Cegła3.jpg"],
    [-425,0,650,0,90,0,500,200,"Patterns/ZniszczonyPlaster.jpg"],

    //wall 2.5
    [-475,0,200,0,0,0,100,200,"Patterns/Cegła3.jpg"],
    [-525,0,-250,0,90,0,900,200,"Patterns/Cegła1.jpg"],
    [-425,0,-250,0,90,0,900,200,"Patterns/Cegła3.jpg"],

    //wall 2.6
    [-175,0,300,0,90,0,1000,200,"Patterns/ZniszczonyPlaster.jpg"],

    //wall 2.7
    [525,0,600,0,0,0,950,200,"Patterns/Cegła3.jpg"],
    [525,0,500,0,0,0,950,200,"Patterns/ZniszczonyPlaster.jpg"],

    //wall 2.8
    [350,0,300,0,0,0,600,200,"Patterns/ZniszczonyPlaster.jpg"],
    [350,0,200,0,0,0,600,200,"Patterns/Cegła4.jpg"],
    [125,0,400,0,90,0,400,200,"Patterns/Cegła3.jpg"],
    [50,0,400,0,90,0,400,200,"Patterns/ZniszczonyPlaster.jpg"],
    [650,0,250,0,90,0,100,200,"Patterns/ZniszczonyPlaster.jpg"],

    //wall 2.9
    [350,0,-200,0,0,0,1050,200,"Patterns/ZniszczonyPlaster.jpg"],
    [350,0,0,0,0,0,800,200,"Patterns/Cegła3.jpg"],
    [350,0,-100,0,0,0,800,200,"Patterns/Cegła3.jpg"],
    [875,0,50,0,90,0,500,200,"Patterns/ZniszczonyPlaster.jpg"],
    [-50,0,-50,0,90,0,100,200,"Patterns/ZniszczonyPlaster.jpg"],
    [750,0,100,0,90,0,400,200,"Patterns/ZniszczonyPlaster.jpg"],
    [812.5,0,300,0,0,0,125,200,"Patterns/Cegła1.jpg"],

    //wall 3.1
    [900,0,-700,0,0,0,200,200,"Patterns/Cegła4.jpg"],
    [900,0,-600,0,0,0,200,200,"Patterns/ZniszczonyPlaster.jpg"],
    [800,0,-650,0,90,0,100,200,"Patterns/Cegła2.jpg"],

    //wall 3.2
    [600,0,-600,0,90,0,800,200,"Patterns/ZniszczonyPlaster.jpg"],
    [500,0,-600,0,90,0,800,200,"Patterns/ZniszczonyPlaster.jpg"],

    //wall 3.3
    [100,0,-775,0,90,0,450,200,"Patterns/Cegła2.jpg"],
    [200,0,-700,0,90,0,600,200,"Patterns/Cegła2.jpg"],
    [-50,0,-550,0,0,0,300,200,"Patterns/Cegła3.jpg"],
    [-50,0,-400,0,0,0,500,200,"Patterns/Cegła3.jpg"],

    //wall 3.4
    [-300,0,-550,0,90,0,300,200,"Patterns/Cegła3.jpg"],
    [-200,0,-700,0,90,0,300,200,"Patterns/ZniszczonyPlaster.jpg"],
    [-800,0,-825,0,90,0,50,200,"Patterns/ZniszczonyPlaster.jpg"],
    [-500,0,-850,0,0,0,600,200,"Patterns/Cegła1.jpg"],
    [-500,0,-800,0,0,0,600,200,"Patterns/Cegła1.jpg"],
    [-362.5,0,-700,0,0,0,125,200,"Patterns/Cegła2.jpg"],
    [-662.5,0,-700,0,0,0,275,200,"Patterns/ZniszczonyPlaster.jpg"],
    [-662.5,0,-650,0,0,0,275,200,"Patterns/ZniszczonyPlaster.jpg"],
    [-800,0,-675,0,90,0,50,200,"Patterns/ZniszczonyPlaster.jpg"],

    //roof
    [0,-100,0,90,0,0,2000,2000,"Patterns/roof.jpg"],
];

var coins = [
    [300,-50,-800,0,0,0,50,50,"Patterns/dollar.jpg",50],
    [-300,-50,770,0,0,0,50,50,"Patterns/dollar.jpg",50],
    [-100,-50,-170,0,0,0,50,50,"Patterns/dollar.jpg",50],
    [150,-50,-800,0,0,0,50,50,"Patterns/dollar.jpg",50],
];

var keys = [
    [900,-50,730,0,90,0,50,50,"Patterns/keys.png",50],
];

var bones = [
    [200,-50,400,0,90,0,50,50,"Patterns/bone.png",100],
    [-900,-50,200,0,0,0,50,50,"Patterns/bone.png",100],
    [-350,-50,-670,0,0,0,50,50,"Patterns/bone.png",100],
];

var spiders = [
    [950,-50,-570,0,0,0,50,50,"Patterns/spider.jpg",50],
    [-950,-50,400,0,0,0,50,50,"Patterns/spider.jpg",50],
];

var PressForwardSound = new Audio;
PressForwardSound.src = "Patterns/Sounds/footstep.mp3";
//variables for movement

var PressLeft = 0;
var PressRight = 0;
var PressForward = 0;
var PressBack = 0;
var PressUp = 0;
var mouseX = 0;
var mouseY = 0;
var lock = false;
var canlock = false;

//link var to container
var container = document.getElementById("container");
//if the mouse is pressed usuwa kursor
container.onclick = function(){
    if(canlock) container.requestPointerLock();

}


//moving players
var pawn = new player(970,0,970,0,90)
//var pawn = new player(0,-400,0,0,0)
var world = document.getElementById("world")
const groundY = 0
var deg = Math.PI/180;

function update(){
    //count movement;
    //dx= PressRight - PressLeft;
    //dz= -(PressForward - PressBack);
    dx = Math.cos(pawn.ry*deg) * (PressRight - PressLeft) - Math.sin(pawn.ry*deg) * (PressForward - PressBack);
    dz = -(Math.sin(pawn.ry*deg) * (PressRight - PressLeft) + Math.cos(pawn.ry*deg) * (PressForward - PressBack));
    dy = - PressUp;
    drx = mouseY/4;
    dry = - mouseX/4; 
    mouseY = mouseX = 0;
    //console.log(PressLeft);
    pawn.x = pawn.x + dx;
    pawn.y = pawn.y + dy;
    //sff movement to take go concreag akmrs
    pawn.z = pawn.z + dz;
    
 //   1. Limit wysokości – zaczynamy spadać
    if (PressUp == 0.5 && pawn.y <= -50) {
        PressUp = -1;
    }

// 2. Lądowanie – zatrzymujemy ruch
    if (PressUp == -0.5 && pawn.y >= groundY) {
        pawn.y = groundY;
        PressUp = 0;
    }

    if(lock){
        pawn.rx = pawn.rx +drx;
        pawn.ry = pawn.ry + dry;
    }
    //pawn.rx = pawn.rx + drx;
    //pawn.ry = pawn.ry + dry;
    console.log(pawn.rx);
    //cange coordintates of the world
    world.style.transform = 
    "translateZ(600px)" +
    "rotateX(" + (-pawn.rx) + "deg)" + "rotateY(" + (-pawn.ry) + "deg)" + 
    "translate3d(" + (-pawn.x) + "px," + (-pawn.y) + "px," + (-pawn.z) + "px)";
}

//if the key is pressed
document.addEventListener("keydown", (event) =>{
    if (event.key == 'w'){
        PressForward = 0.5;
        PressForwardSound.play();
    }
    if(event.key == 's'){
        PressBack = 0.5;
        PressForwardSound.play();
    }
    if(event.key == 'a'){
        PressLeft = 0.5;
        PressForwardSound.play();
    }
    if(event.key == 'd'){
        PressRight = 0.5;
        PressForwardSound.play();
    }
    if(event.key == ' '){
        PressUp = 0.5;
    }})
//if the key is let go off, we chacke if key is up
document.addEventListener("keyup", (event) =>{
    if (event.key == 'w'){
        PressForward = 0;
    }
    if(event.key == 's'){
        PressBack = 0;
    }
    if(event.key == 'a'){
        PressLeft = 0;
    }
    if(event.key == 'd'){
        PressRight = 0;
    }
    if(event.key == " "){
        PressUp = -0.5;
    }})

document.addEventListener("pointerlockchange", (event)=>{
    lock = !lock;
})
document.addEventListener("mousemove",(event)=>{
    mouseX = event.movementX;
    mouseY = event.movementY;
});

function CreateNewWorld(){
    CreateSquares(map,"map");
}
//generate new world
function CreateSquares(squares,string){
    for(let i = 0; i < squares.length; i++){
        //create rectangles and styles
        let NewElement = document.createElement("div");
        NewElement.className = string + " square";
        NewElement.id = string + i;//console log you can check what wrong with each sq
        NewElement.style.width = squares[i][6] + "px";
        NewElement.style.height = squares[i][7] + "px";
        NewElement.style.background = squares[i][8];
        NewElement.style.backgroundImage = "url(" + squares[i][8] + ")";
        //NewElement.style.opacity = squares[i][9];
        NewElement.style.borderRadius = squares[i][9] + "%";
        NewElement.style.transform = 
           
            "translate3d(" + (600-squares[i][6]/2 + squares[i][0]) + "px," + (400-squares[i][7]/2 + squares[i][1]) + "px," + squares[i][2] + "px)" + 
             "rotateX(" + squares[i][3] + "deg)" + "rotateY(" + squares[i][4] + "deg)" + "rotateZ(" + squares[i][5] + "deg)";
        //insert rectanglers into the world
        world.append(NewElement);
        }
}


CreateNewWorld();
TimerGame = setInterval(update,0.0001);

//homework - change the wasd to arrows
//03.12 - homework, make labirynth
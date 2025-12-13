//variables for navigation
var menu1 = document.getElementById("menu1");
var menu2 = document.getElementById("menu2");
var menu3 = document.getElementById("menu3");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var clickSound = new Audio;
clickSound.src = "Patterns/Sounds/click.mp3";
var collectCoins = new Audio;
collectCoins.src = "Patterns/Sounds/coin.mp3";
var collectKeys = new Audio;
collectKeys.src = "Patterns/Sounds/drzwi.mp3";
var collectBones = new Audio;
collectBones.src = "Patterns/Sounds/bone.mp3";
var collectSpiders = new Audio;
collectSpiders.src = "Patterns/Sounds/spider.mp3";
var backgroundMusic = new Audio;
backgroundMusic.src = "Patterns/Sounds/background music.mp3";
//create navigation
button2.onclick = function(){
    clickSound.play();
    menu1.style.display ="none";
    menu2.style.display ="block";
    menu3.style.display ="none";
}
button3.onclick = function(){
    menu2.style.display ="none";
    menu1.style.display ="block";
    menu3.style.display ="none";
    clickSound.play();
}
button4.onclick = function(){
    menu2.style.display ="none";
    menu1.style.display ="none";
    menu3.style.display ="block";
    clickSound.play();
}
button5.onclick = function(){
    menu2.style.display ="none";
    menu1.style.display ="block";
    menu3.style.display ="none";
    clickSound.play();
}
button1.onclick = function(){
    menu1.style.display ="none";
    CreateNewWorld();
    CreateSquares(coins,"coin");
    CreateSquares(spiders,"spiders");
    CreateSquares(keys,"key");
    CreateSquares(bones,"bones");
    TimerGame = setInterval(repeatForever,10);
    canlock=true;
    clickSound.play();
    backgroundMusic.play();
}
//homework - creatig items, collecting coins and keys\
//homework - create one more button rules connected to menu3 

function iteration(squares,string){
    for(let i = 0; i < squares.length; i++){
        let r = (squares[i][0] - pawn.x)**2 +
            (squares[i][1] - pawn.y)**2 +
            (squares[i][2] - pawn.z)**2;
        let r1 = squares[i][6]**2;
        if(r<r1){
            document.getElementById(string + i).style.display = "none";
            squares[i][0]= 1000000000;
            //collectCoins.play();
            if(string == "coin"){
                collectCoins.play();
            }
            if(string == "key"){
                collectKeys.play();
            }
            if(string == "spiders"){
                collectSpiders.play();
            }
            if(string == "bones"){
                collectBones.play();
            }
        }
    }
}

function repeatForever(){
    update();
    iteration(coins,"coin");
    iteration(keys,"key");
    iteration(spiders,"spiders");
    iteration(bones,"bones");
}

//homwork - use other items in your labirynth (4 categories with pics), they should disappear
//put all of this on github and link it to the whatsapp
//decorate the labirynth
//freeiconspng.com 
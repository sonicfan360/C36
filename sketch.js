var form;
var game;
var player;
var gamestate=0;
var playercount=0;



var dataBase;
function setup(){
    createCanvas(500,500);
    dataBase = firebase.database();
    game = new Game();
    game.getState();
    game.startGame();
    
    
}

function draw(){
    background("white");
   
}


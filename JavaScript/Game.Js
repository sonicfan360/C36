class Game{
    constructor()
    {}
    getState()
    {
        var gameStateRef = dataBase.ref("GameState");
        gameStateRef.on("value", function(data)
        {gamestate = data.val();});
    }
 startGame(){
     if(gamestate === 0){
         player = new Player();
         player.getCount();
         form = new Form();
         form.display();
     }
     
 }
}
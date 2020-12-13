class Player {
    constructor(){

    }
    getCount()
    {
       var countRef =  dataBase.ref("PlayerCount")
       countRef.on("value", function(data){
        playercount = data.val();
       })
    }
   updateName(playerName)
   {
     var playerIndex  = "Player" + playercount;
     dataBase.ref(playerIndex).set({Name:playerName})
   }
   updateCount(playerCount)
   {
       dataBase.ref("/").update({PlayerCount:playerCount})
   }

}
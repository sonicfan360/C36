class Form{

   constructor()
   {
       
   }
   display()
   {
       var title = createElement("H2");
       title.html("Car Racing Game");
       title.position(170, 50)
       var input = createInput("Name");
       input.position(170,200)
       var button = createButton("Play")
       button.position(170,300)
       button.mousePressed(function()
       { input.hide();
        button.hide();
        var name = input.value();
        var greeting = createElement("H3");
        greeting.html("Hello "+ name)
        greeting.position(170,200)
        playercount = playercount + 1;
        player.updateName(name);
        player.updateCount(playercount);
    }
        );
   }
   
}
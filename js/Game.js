class Game{
    constructorer (){

    }
    getState(){
var gameStateRef=database.ref("gameState")
gameStateRef.on("value",function(data){
gameState=data.val();
}
)
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    

async start(){
    if(gameState===0){
player=new Player();
 var playerCountRef=await database.ref("playerCount").once("value")
if (playerCountRef.exists ())
{
    playerCount=playerCountRef.val()
    player.getCount()
}
        form=new Form()
        form.display();
    }
car1 = createSprite(100, 200)
car1.addImage("car1", car1_img)
car2 = createSprite(300,200)
car2.addImage("car2", car2_img)
car3 = createSprite(500, 200)
car3.addImage("car3", car3_img)
car4 = createSprite(700, 200)
car4.addImage("car4", car4_img)

cars= [car1, car2, car3, car4] 

}

play(){
form.hide();
textSize(30)
 text("game start", 120,100)
Player.getPlayerInfo();

if(allPlayers!==undefined){
image(track, 0, -displayHeight *4, displayWidth , displayHeight *5);

  //  var display_position=130;
    var x = 200;
    var y;
    var index = 0;

    for(var plr in allPlayers){
        index=index+1;
        
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;
        
        if(index===player.index){
        //fill ("red")
        cars[index-1].shapeColor="red";
        camera.position.x=displayWidth/2
        camera.position.y=cars[index-1].y
        }
        else
        fill ("black")
   // display_position+=20;
    //textSize(20)
    //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)
}}



if(keyIsDown(UP_ARROW) && player.index!==null){
   player.distance+=50;
   player.update();
    
} 


if(player.distance>3860){
    gameState=2;
}







drawSprites();

}
end(){
var message=createElement("h2");
message.html("Congratulations!"+player.name);
message.position(displayWidth/2-70,displayHeight/4);
}



    
}
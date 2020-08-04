class Game{
    constructiom(){

    }
getState(){
var gamestateref=database.ref('gameState')
gamestateref.on("value",function(data){
    gameState=data.val()
})

}
update(state){
    database.ref('/').update({gameState:state})
}
}

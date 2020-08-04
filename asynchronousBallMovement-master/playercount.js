class Player{
    constructiom(){

    }
getCount(){
var playerCountref=database.ref('playerCount')
playerCount.on("value",function(data){
    playerCount=data.val()
})

}
update(count){
    database.ref('/').update({playerCount:state});
}
}
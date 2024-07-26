//PROCESA EL CSV ademas ordenar a los jugadores por media 

let bronzePlayers = [];
let platePlayers = [];
let goldPlayers = [];
let playerOut = [];

let playersSold = JSON.parse(localStorage.getItem('listPlayerUsed'));

export function proccess(CSVFile) {
    // recorre y almacena en localStorage por media de jugadores
    
    //bronze players
    for(let players of CSVFile){
        if(players.Rating > 46 && players.Rating < 65){
            bronzePlayers.push(players)
        } 
    }
    localStorage.setItem('bronze', JSON.stringify(bronzePlayers));
    
    //platePlayers
    for(let player of CSVFile){
        if(player.Rating > 64 && player.Rating < 75){
            platePlayers.push(player);
        }
    }
    localStorage.setItem('plate', JSON.stringify(platePlayers));

    //gold players
    for(let player of CSVFile){
        if(player.Rating > 74){
            goldPlayers.push(player)
        }
    }
    localStorage.setItem('gold', JSON.stringify(goldPlayers));

    localStorage.setItem('listPlayerUsed', JSON.stringify(playerOut));
}
export function deliverPlayer(namePlayer, medPlayer){
    let gold = JSON.parse(localStorage.getItem('gold'));
    const pick = gold.find((player) => player.Lastname.trim() === namePlayer.trim() && player.Rating == medPlayer);
    if(pick){
        playersSold.push(pick);
    }
    localStorage.setItem('listPlayerUsed', JSON.stringify(playersSold));
}

export function resetList(){
    let playersSold = JSON.parse(localStorage.getItem('listPlayerUsed'));
    playersSold = [];
    localStorage.setItem('listPlayerUsed', JSON.stringify(playersSold));
}

//debo crear funciones para resetear la vista, y la lista de la media player 


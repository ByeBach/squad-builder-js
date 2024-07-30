const med83 = [83,83,83,83,83,83,83,83,83,82,82];
let createdMed83 = [];
//Plantilla 84: 86 + 4 x 84 + 6 x 83
const med84 = [86,84,84,84,84,83,83,83,83,83,83];
let createdMed84 = [];
//Plantilla 85: 87 + 5 x 85 + 3 x 84 + 2 x 83
const med85 = [87,85,85,85,85,85,84,84,84,83,83];
let createdMed85 = [];
//Plantilla 86: 2 x 88 + 87 + 86 + 85 + 6 x 84
const med86 = [88,88,87,86,85,84,84,84,84,84,84];
let createdMed86 = [];
//Plantilla 87: 88 x 5 + 85 x 3 + 84 x 3
const med87 = [88,88,88,88,88,85,85,85,84,84,84];
let createdMed87 = [];
// plantilla 88: 91 + 2 x 89 + 2 x 88 + 87 + 86 + 4 x 85
const med88 = [91,91,89,89,88,87,86,85,85,85,85];
let createdMed88 = [];
//Plantilla 89: 91 x 2 + 89 x 5 + 88 + 84 x 3
const med89 = [91,91,89,89,89,89,89,88,84,84,84];
let createdMed89 = [];


let players = JSON.parse(localStorage.getItem('gold'));
let playersSold = JSON.parse(localStorage.getItem('listPlayerUsed'));

function isSoldPlayer(playerName, playerMed){
    let playersSold = JSON.parse(localStorage.getItem('listPlayerUsed'));
    for(let p of playersSold){
        if(p.Lastname === playerName && p.Rating === playerMed){
            return true;
        }
    }
}

export function reRollplayer(lastname, rating, IDPlayers){
    console.log(IDPlayers);
    let gold = JSON.parse(localStorage.getItem('gold'));
    //const test = gold.find((playerTest) => IDPlayers.includes(playerTest.Id));
    //console.log({test});
    const pick = gold.find((player) => player.Lastname.trim() != lastname.trim() && player.Rating == rating && !IDPlayers.includes(player.Id));
    //console.log(pick);
    return pick;
    
}

export function created83(){
    createdMed83 = [];
    let playerUsed = [];
    //console.log({playersSold})
    for(let med of med83){
        const result = players.find((player) => player.Rating === med && !playerUsed.includes(player) && !isSoldPlayer(player.Lastname, player.Rating));
        if(result){
            playerUsed.push(result);
            createdMed83.push(result);
            //playersSold.push(result);
        }else{
            createdMed83.push('not found')
        }
    }
    return createdMed83   
}

export function created84(){
    createdMed84 = [];
    let playerUsed = [];
    for(let med of med84){
        const result = players.find((player) => player.Rating === med && !playerUsed.includes(player) && !isSoldPlayer(player.Lastname, player.Rating))
        if(result){
            playerUsed.push(result);
            createdMed84.push(result);
            //playersSold.push(result);
        }else{
            createdMed84.push('not found')
        }
    }
    return createdMed84   
}

export function created85(){
    createdMed85 = [];
    let playerUsed = [];
    for(let med of med85){
        const result = players.find((player) => player.Rating === med && !playerUsed.includes(player) && !isSoldPlayer(player.Lastname, player.Rating))
        if(result){
            playerUsed.push(result);
            createdMed85.push(result);
            //playersSold.push(result);
        }else{
            createdMed85.push('not found');
        }
    }
    return createdMed85;   
}

export function created86(){
    createdMed86 = [];
    let playerUsed = [];
    for(let med of med86){
        const result = players.find((player) => player.Rating === med && !playerUsed.includes(player) && !isSoldPlayer(player.Lastname, player.Rating))
        if(result){
            playerUsed.push(result);
            createdMed86.push(result);
            //playersSold.push(result);
        }else{
            createdMed86.push('not found');
        }
    }
    return createdMed86;   
}

export function created87(){
    createdMed87 = [];
    let playerUsed = [];
    for(let med of med87){
        const result = players.find((player) => player.Rating === med && !playerUsed.includes(player) && !isSoldPlayer(player.Lastname, player.Rating))
        if(result){
            playerUsed.push(result);
            createdMed87.push(result);
            //playersSold.push(result);
        }else{
            createdMed87.push('not found');
        }
    }
    return createdMed87;   
}

export function created88(){
    createdMed88 = [];
    let playerUsed = [];
    for(let med of med88){
        const result = players.find((player) => player.Rating === med && !playerUsed.includes(player) && !isSoldPlayer(player.Lastname, player.Rating))
        if(result){
            playerUsed.push(result);
            createdMed88.push(result);
            //playersSold.push(result);
        }else{
            createdMed88.push('not found');
        }
    }
    return createdMed88;   
}

export function created89(){
    createdMed89 = [];
    let playerUsed = [];
    for(let med of med89){
        const result = players.find((player) => player.Rating === med && !playerUsed.includes(player) && !isSoldPlayer(player.Lastname, player.Rating))
        if(result){
            playerUsed.push(result);
            createdMed89.push(result);
            //playersSold.push(result);
        }else{
            createdMed89.push('not found');
        }
    }
    return createdMed89;   
}




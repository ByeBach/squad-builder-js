import {proccess, deliverPlayer, resetList} from './proccessCSV.js';
import {created83, created84, created85, created86,created87,created88,created89} from './createMed.js';

document.getElementById('upload').addEventListener('change', function(event){
    const file = event.target.files[0];
    if(file){
        Papa.parse(file, {
            header:true,
            dynamicTyping: true,
            complete: function(results){
                //console.log(results.data);
                proccess(results.data);
            }
        })
    }
});

function clearView(){
    document.getElementById('content').innerHTML = ''
}
function firstView(){

}

function generatePLayerCard(data){
    let html = '';
    document.getElementById('content').innerHTML = html;
    data.forEach(element => {
        html += `<div class='card' >`
            html +=`<p id='playerRating'>${element.Rating}</p>`
            html +=`<p id='playerLastName'>${element.Lastname} </p>`
            html +=`<p>${element.Country}</p>`
            html +=`<p>${element.Rarity}</p>`
            html +=`<p>${element.League} ${element.Club} </p>`
        html += `</div>`
    });
    document.getElementById('content').innerHTML = html;
}

const btn83 = document.getElementById("button83")
btn83.addEventListener("click", (e) => {
    e.preventDefault();
    let playerlist = created83();
    generatePLayerCard(playerlist);
});
const btn84 = document.getElementById("button84")
btn84.addEventListener("click", (e) => {
    e.preventDefault();
    let playerlist = created84();
    generatePLayerCard(playerlist);
});
const btn85 = document.getElementById("button85")
btn85.addEventListener("click", (e) => {
    e.preventDefault();
    let playerlist = created85();
    generatePLayerCard(playerlist);
});
const btn86 = document.getElementById("button86")
btn86.addEventListener("click", (e) => {
    e.preventDefault();
    let playerlist = created86();
    generatePLayerCard(playerlist);
});
const btn87 = document.getElementById("button87")
btn87.addEventListener("click", (e) => {
    e.preventDefault();
    let playerlist = created87();
    generatePLayerCard(playerlist);
});
const btn88 = document.getElementById("button88")
btn88.addEventListener("click", (e) => {
    e.preventDefault();
    let playerlist = created88();
    generatePLayerCard(playerlist);
});
const btn89 = document.getElementById("button89")
btn89.addEventListener("click", (e) => {
    e.preventDefault();
    let playerlist = created89();
    generatePLayerCard(playerlist);
});
const deliver = document.getElementById("deliver");
deliver.addEventListener("click", (e) => {
    e.preventDefault();
    let showSquadContainer = document.getElementById('content');
    let itemPlayer = showSquadContainer.childNodes;
    itemPlayer.forEach((item) =>{
        let medPlayer = item.childNodes[0].textContent
        let namePlayer = item.childNodes[1].textContent
        deliverPlayer(namePlayer,medPlayer);
    })
    clearView()
})
const reset = document.getElementById('reset');
reset.addEventListener("click", (e) => {
    e.preventDefault();
    resetList();
});








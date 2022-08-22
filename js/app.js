const palyerArr = [];



function display(player) {
    console.log(player);
    const playerList = document.getElementById('player-list');
    playerList.innerHTML = '';

    for(let i = 0; i < player.length; i++) {
        const name = player[i].playerName;
        console.log(name)

        const ol = document.createElement('ol');
        ol.innerHTML = `<li class="text-gray-300 text-lg">${i + 1}. ${name}</li>`
        playerList.appendChild(ol);
        
    }
    
}

function addToSelect(element) {
    // button disable
    const disabledButton = element.parentNode.children[3];
    disabledButton.setAttribute('disabled', true);

    const playerName = element.parentNode.children[1].innerText;
    const playerObj = {
        playerName: playerName
    }
    
    palyerArr.push(playerObj);

    display(palyerArr);

    


}

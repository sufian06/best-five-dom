const palyerArr = [];

function display(player) {
  const playerList = document.getElementById("player-list");
  playerList.innerHTML = "";

  for (let i = 0; i < player.length; i++) {
    const name = player[i].playerName;

    const ol = document.createElement("ol");
    ol.innerHTML = `<li class="text-gray-300 text-lg ml-4 mb-2">${
      i + 1
    }. ${name}</li>`;
    playerList.appendChild(ol);
  }
}

function addToSelect(element) {
  // button disable
  const disabledButton = element.parentNode.children[3];
  disabledButton.setAttribute("disabled", true);

  const playerName = element.parentNode.children[1].innerText;
  const playerObj = {
    playerName: playerName,
  };

  palyerArr.push(playerObj);

  if (palyerArr.length > 5) {
    alert("You can not select more than 5");
    return false;
  }

  display(palyerArr);
}

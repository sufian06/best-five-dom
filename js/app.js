function addToSelect(element) {
    // console.log('select button clicked');
    const playerName = (element.parentNode.children[1].innerText);
    const disabledButton = element.parentNode.children[3];
    disabledButton.setAttribute('disabled', true);
    console.log(playerName)
    
}
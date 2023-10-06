function submitInput(){
    const text = document.getElementById("flavorInput").value;
const flavorArray = text.split(",");
const flavorCount = countFlavor(flavorArray);
displayCount(flavorCount);
}


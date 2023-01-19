
function ocultar() {
    document.getElementById("choise").style.display = "none";
    document.getElementById("roleta_val").style.display = "block";
}

function exibir() {
    document.getElementById("choise").style.display = "block";
    document.getElementById("roleta_val").style.display = "none";
}

function playOnClick() {   
    globalObjects = {
        btnPlay: document.getElementById("btnPlay"),
        roleta: document.getElementById("roleta"),
        btnStop: document.getElementById("btnStop")
    }
    
    globalObjects.timeInitial = new Date();
    globalObjects.btnPlay.style.visibility = "hidden";
    globalObjects.btnStop.style.visibility = "visible";
    globalObjects.roleta.style.animation = "roleta 00.4s linear infinite";
}


function stopOnClick() {
    globalObjects.roleta.style["animation-play-state"] = "paused";
    globalObjects.btnStop.style.visibility = "hidden";
    globalObjects.btnPlay.style.visibility = "visible";
}
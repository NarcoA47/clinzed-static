function menueOpen() {
    var x = document.getElementById("Midcontainer");
    if(x.className === "mid-container") {
        x.style.display = "block"
    }
    else {
        x.style.display = "none"
    }
}

function menuClose() {
    var y = document.getElementById("Midcontainer");
    if(y.className === "mid-container") {
        y.style.display = "none"
    }
    else {
        x.style.display = "block"
    }
}


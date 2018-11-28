// Validating Empty Field

//Function To Display Popup
function div_show(divName) {
document.getElementById(divName).style.display = "block";
}
//Function to Hide Popup
function div_hide(divName){
document.getElementById(divName).style.display = "none";
}

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}



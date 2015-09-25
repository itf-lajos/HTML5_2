// Módosítjuk a H1 elem tartalmát.
document.querySelector("h1").innerHTML ="Hello ITFactory";

// Kép forrásának módosítása.
function changeUrl() {
    document.querySelector("img").src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJxeHFBoKp_xMQD00J0f3ymuTeT-vD7fbEDIIuABnDTEIpnOMFtQ";
}

// Stílus módosítása.
function changeStyle() {
    document.querySelector("img").style.width = "40px";
}

// Adatok ellenőrzése.
function validate() {
    // Az input mező és a hibaüzenet kiválasztása.
    var input = document.querySelector(".input-validate");
    var errorP = document.querySelector(".no-validate");
    
    // Az input mező értékének kiolvasása.
    var inputValue = input.value;
    
    // Az input mező értéke nagyobb legyen mint 5 és kisebb mint 21
    if ( inputValue < 6 || inputValue > 20 ) {
        console.log( "Az érték nem megfelelő!" );
        errorP.innerHTML = "Az érték nem megfelelő!";
    } else {
        errorP.innerHTML = "";
    }
    
}

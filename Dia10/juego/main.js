let id="";
let puntos=0;
let puntosMesa=0;
let juegoTerminado=false;

async function iniciarJuego() {
    const res=await fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    const data=await res.json();
    id=data.deck_id;
    puntos=0;
    puntosMesa=0;
    juegoTerminado=false;
    document.getElementById("tusCartas").innerHTML="";
    document.getElementById("mesaCartas").innerHTML="";
    document.getElementById("x").textContent="";
    document.getElementById("puntos").textContent="Puntos: 0";
    document.getElementById("puntosMesa").textContent="Puntos de la mesa: 0";
    pedirCarta();
    pedirCarta();
}

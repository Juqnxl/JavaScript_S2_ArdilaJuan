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

async function pedirCarta() {
    if (juegoTerminado) return;

    const res=await fetch(`https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=1`);
    const data=await res.json();
    const carta=data.cards[0];

    const img=document.createElement("img");
    img.src=carta.image;
    img.alt=carta.code;
    document.getElementById("tusCartas").appendChild(img);
    const valor = valorCarta(carta.value);
    puntos+=valor;
    document.getElementById("puntos").textContent="puntos: " + puntos;
    if (puntos===21) {
        document.getElementById("x").textContent="ganaste con 21";
        juegoTerminado=true;
    } else if (puntos > 21) {
        document.getElementById("x").textContent="te pasaste de 21, perdiste";
        juegoTerminado=true;
    }
}

function valorCarta(valor) {
    if (valor==="ACE") return 11;
    if (["KING", "QUEEN", "JACK"].includes(valor)) return 10;
    return parseInt(valor);
}

async function plantarse() {
    if (juegoTerminado) return;
    juegoTerminado=true;
    while (puntosMesa < 17) {
        const res=await fetch(`https://www.deckofcardsapi.com/api/deck/${id}/draw/?count=1`);
        const data=await res.json();
        const carta=data.cards[0];
        const img=document.createElement("img");
        img.src=carta.image;
        img.alt=carta.code;
        document.getElementById("mesaCartas").appendChild(img);
        puntosMesa += valorCarta(carta.value);
        document.getElementById("puntosMesa").textContent="puntos de la mesa: " + puntosMesa;
        await new Promise(r => setTimeout(r, 500));
    }

    evaluarGanador();
}

function evaluarGanador() {
    let mensaje="";
    if (puntosMesa > 21 || (puntos <= 21 && puntos > puntosMesa)) {
        mensaje="ganaste";
    } else if (puntos===puntosMesa) {
        mensaje="empate";
    } else {
        mensaje="mesa gana";
    }
    document.getElementById("x").textContent=mensaje;
}

function reiniciarJuego() {
    iniciarJuego();
}
iniciarJuego();

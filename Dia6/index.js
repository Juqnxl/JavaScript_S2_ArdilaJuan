const id = prompt("ingresar el id del personaje:");
if (id !== null && id.trim() !== "") {
const jEA = new XMLHttpRequest();
const url = `https://rickandmortyapi.com/api/character/${id}`;
jEA.open("GET", url, true);

jEA.onload = function () {
if (jEA.status === 200) {
const personaje = JSON.parse(jEA.responseText);
alert(
`nombre: ${personaje.name}\n` +
`especie: ${personaje.species}\n` +
`origen: ${personaje.origin.name}\n`+
`estado: ${personaje.status}\n` +
`genero: ${personaje.gender}`
);
} else {
alert("id del personaje no encontrado :(");
}
};
jEA.onerror = function () {
alert("error intentalo mas tarde :)");
};
jEA.send();
}
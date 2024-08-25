const lista = document.getElementById("lista");
const textoInput = document.getElementById("texto");
const btnAñadir = document.getElementById("btnAñadir");

btnAñadir.addEventListener("click", function() {
    const texto = textoInput.value.trim();

    if (texto !== "") {
        const nuevoElemento = document.createElement("li");

        nuevoElemento.textContent = texto;

        lista.appendChild(nuevoElemento);

        textoInput.value = "";
        }
});


var textinput = document.querySelector("#input-texto");

function criptografar() {
    var texto = textinput.value;

    var resultcripto = texto.replace(/e/g, "enter")
                           .replace(/i/g, "imes")
                           .replace(/a/g, "ai")
                           .replace(/o/g, "ober")
                           .replace(/u/g, "uafat");

    document.getElementById('output').innerHTML = `
        <textarea readonly id="input-texto">${resultcripto}</textarea>
        <button class="btn-copiar" onclick="copiar()">Copiar</button>
    `;
}

function descriptografar() {
    var texto = textinput.value;

    var resultdescripto = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/uafat/g, "u");

    document.getElementById('output').innerHTML = `
        <textarea readonly id="input-texto">${resultdescripto}</textarea>
        <button class="btn-copiar" onclick="copiar()">Copiar</button>
    `;
}

function copiar() {
    var textocop = document.getElementById('input-texto');
    textocop.select();
    document.execCommand('copy');
    alert("Texto copiado!");
}

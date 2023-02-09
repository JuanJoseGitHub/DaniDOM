let entradaDeTexto = document.querySelector("input")
let paragrafoParaAmosarOResultado = document.querySelector("p")

function changeParagraphContent() {
    const contidoDaEntradaDeTexto = entradaDeTexto.value
    const novoTextoAAmosar = contidoDaEntradaDeTexto + " y tal..."
    paragrafoParaAmosarOResultado.innerText = novoTextoAAmosar
}

entradaDeTexto.addEventListener("input", changeParagraphContent)

/**
 * O evento "input" acontece cada vez que cambia o valor
 * dun elemento de formulario.
 */

//função para limitar os comentários em até 80 caracteres
var divComentario = document.querySelector("#caixa_comentario")
var botaoComentario = document.querySelector("#botao_comentario")

divComentario.addEventListener("input", function(){
    var texto = divComentario.value
    console.log(texto.length)

    if(texto.length>80){
        divComentario.classList.add("error-text")
        botaoComentario.disabled = true
        botaoComentario.style.opacity = 0.7
    }
    else{
        divComentario.classList.remove("error-text")
        botaoComentario.disabled = false
        botaoComentario.style.opacity = 1
    }

})
function armazenarValor() {

    // Armazena o valor que p usuário digitou
var userInput = document.getElementById("userInput").value

// Exibe o valor armazenado
console.log("O valor da variável é: " + userInput)

// Atualiza o conteúdo
document.getElementById("valorInserido").innerText = "O valor inserido é: " + userInput
    
}


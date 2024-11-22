// Função para criptografar usando a cifra de César
function cifraCesar(texto, deslocamento) {
    let resultado = '';

    // Percorre cada caractere do texto
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        let codigo = texto.charCodeAt(i);

        // Se o caractere for uma letra maiúscula (A-Z)
        if (codigo >= 65 && codigo <= 90) {
            resultado += String.fromCharCode(((codigo - 65 + deslocamento) % 26) + 65);
        }
        // Se o caractere for uma letra minúscula (a-z)
        else if (codigo >= 97 && codigo <= 122) {
            resultado += String.fromCharCode(((codigo - 97 + deslocamento) % 26) + 97);
        } 
        else {
            // Se não for uma letra (como números ou pontuação), mantém o caractere original
            resultado += char;
        }
    }

    return resultado;
}

// Função para descriptografar, passando o deslocamento negativo
function descriptografarCesar(texto, deslocamento) {
    return cifraCesar(texto, -deslocamento);
}

// Exemplo de uso:
let textoOriginal = "Olá, Mundo!";
let deslocamento = 3;

let textoCriptografado = cifraCesar(textoOriginal, deslocamento);
console.log("Texto Criptografado: " + textoCriptografado);

let textoDescriptografado = descriptografarCesar(textoCriptografado, deslocamento);
console.log("Texto Descriptografado: " + textoDescriptografado);

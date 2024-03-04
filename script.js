document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const outputText = encryptText(inputText);
    document.getElementById('outputText').value = outputText;
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('outputText').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('inputText').value = decryptedText;
});

document.getElementById('copyButton').addEventListener('click', async function() {
    const outputText = document.getElementById('outputText');
    await navigator.clipboard.writeText(outputText.value);
    alert('Texto copiado al portapapeles');
});

function encryptText(input) {
    const shift = 3;
    return transformText(input, shift);
}

function decryptText(input) {
    const shift = -3;
    return transformText(input, shift);
}

function transformText(input, shift) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        let char = input.charCodeAt(i);
        if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
            let base = char >= 97 ? 97 : 65;
            char = ((char + shift - base + 26) % 26) + base;
        }
        output += String.fromCharCode(char);
    }
    return output;
}


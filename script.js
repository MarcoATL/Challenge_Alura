// script.js
document.getElementById('encrypt-btn').addEventListener('click', () => {
    processText('encrypt');
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    processText('decrypt');
});

document.getElementById('copy-btn').addEventListener('click', () => {
    copyToClipboard();
});

function processText(action) {
    const inputText = document.getElementById('input-text').value;
    let resultText = '';

    if (action === 'encrypt') {
        resultText = inputText
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    } else if (action === 'decrypt') {
        resultText = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    if (resultText) {
        document.getElementById('output-message').classList.add('hidden');
        document.getElementById('output-text').classList.remove('hidden');
        document.getElementById('result-text').innerText = resultText;
    } else {
        document.getElementById('output-message').classList.remove('hidden');
        document.getElementById('output-text').classList.add('hidden');
    }
}

function copyToClipboard() {
    const text = document.getElementById('result-text').innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado al portapapeles');
    });
}

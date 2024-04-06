document.addEventListener('DOMContentLoaded', function() {
    var btnEncryptor = document.querySelector(".btn-encryptor");
    var btnDecryptor = document.querySelector(".btn-decryptor");
    var containerImg = document.querySelector(".container-img");
    var containerText = document.querySelector(".container-text");
    var containerOutput = document.querySelector(".container-output");

    var textBox = document.querySelector(".text-box");
    textBox.value = "";

    btnEncryptor.addEventListener("click", encryptor);
    btnDecryptor.addEventListener("click", decryptor);

    function encryptor(){
        nextHidden();
        var textBox = recoverText();
        document.querySelector(".text-output").textContent = encryptorText(textBox);
    }

    function decryptor(){
        nextHidden();
        var textBox = recoverText();
        document.querySelector(".text-output").textContent = decryptorText(textBox);
    }

    function recoverText(){
        var textBox = document.querySelector(".text-box");
        return textBox.value;
    }

    function nextHidden(){
        containerImg.classList.add("hidden");
        containerText.classList.add("hidden");
    }

    function encryptorText(message) {
        return message.replace(/a/g, 'ai')
                      .replace(/e/g, 'enter')
                      .replace(/i/g, 'imes')
                      .replace(/o/g, 'ober')
                      .replace(/u/g, 'ufat');
    }

    function decryptorText(message) {
        return message.replace(/ai/g, 'a')
                      .replace(/enter/g, 'e')
                      .replace(/imes/g, 'i')
                      .replace(/ober/g, 'o')
                      .replace(/ufat/g, 'u');
    }

    const btnCopy = document.querySelector(".btn-copy");

    btnCopy.addEventListener("click", function() {
        var content = document.querySelector(".text-output").textContent;
        navigator.clipboard.writeText(content);
        console.log("Texto copiado");
    });
});
//Seleção por query selector
const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")

const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")

//Eventos

//Gerar QR CODE

function createQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Gerando Código...";

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
    })

    qrCodeBtn.innerText = "Seu Código Está Pronto!";


    //ao clicar no botão, ele retorna caso não tenha valor inserido, e quando tem ele, enquanto gera, mostra a mensagem
    //ele capta o valor inserido no link, joga para a API, e ela gera tudo automaticamente
    //adiciona a classe ao container de "active", dentro de um evento que só libera a visualização depois de carregar
}

qrCodeBtn.addEventListener("click", () => {
    createQrCode();
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter") {
        createQrCode();
        //nesse caso, se a gente precionar Enter na barra de input, a gente também inicia a função de criar qr code
    }
})

// Limpar área QRCODE

qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active");
        qrCodeBtn.innerText = "Gerar QR-Code";
    }
})
document.addEventListener("DOMContentLoaded", function() {
    const qrCodeElement = document.getElementById("qrcode");
    const telegramUrl = "https://t.me/routePlanner_bot";

    new QRCode(qrCodeElement, {
        text: telegramUrl,
        width: 128,
        height: 128,
        colorDark: "#333",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});

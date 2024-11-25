document.addEventListener("DOMContentLoaded", function() {
    const qrCodeElement = document.getElementById("qrcode");
    const telegramUrl = "https://t.me/routePlanner_bot";

    new QRCode(qrCodeElement, {
        text: telegramUrl,
        width: 160,
        height: 160,
        colorDark: "#2D3748",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
});

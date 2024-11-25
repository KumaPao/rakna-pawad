// ฟังก์ชันเปิด/ปิดเพลง
function toggleMusic() {
    const musicIframe = document.getElementById("musicIframe");
    const musicIcon = document.getElementById("musicIcon");

    // เช็คสถานะของ iframe
    if (musicIframe.style.width === "0px" || musicIframe.style.width === "") {
        musicIframe.style.width = "560px"; // ขนาด iframe
        musicIframe.style.height = "315px"; // ขนาด iframe
        musicIcon.style.animationPlayState = "paused"; // หยุดการหมุนแผ่นเสียง
    } else {
        musicIframe.style.width = "0px"; // ซ่อน iframe
        musicIframe.style.height = "0px"; // ซ่อน iframe
        musicIcon.style.animationPlayState = "running"; // ให้แผ่นเสียงหมุนต่อ
    }
}

// ฟังก์ชันเปิด confetti
document.getElementById("confettiButton").addEventListener("click", function() {
    let confettiContainer = document.getElementById("confetti");
    confettiContainer.style.display = "block";

    let confettiCount = 200;
    for (let i = 0; i < confettiCount; i++) {
        let confettiPiece = document.createElement("div");
        confettiPiece.classList.add("confetti");

        confettiPiece.style.backgroundColor = getRandomColor();
        confettiPiece.style.left = Math.random() * window.innerWidth + "px";
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + "s";

        confettiContainer.appendChild(confettiPiece);
    }
});

// ฟังก์ชันเปิดป๊อปอัพ
document.getElementById("openPopupButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "flex";
});

// ฟังก์ชันปิดป๊อปอัพ
document.getElementById("closePopupButton").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

// ฟังก์ชันเลือกสีสุ่มสำหรับ confetti
function getRandomColor() {
    const colors = ['#ff6347', '#32cd32', '#1e90ff', '#ff7f50', '#ff1493'];
    return colors[Math.floor(Math.random() * colors.length)];
}

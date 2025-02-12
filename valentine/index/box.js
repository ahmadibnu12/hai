function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = Math.random() * -100 + "px";
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.animationDuration = (Math.random() * 3 + 4) + "s";
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 12000);
    }
}

function getRandomColor() {
    const colors = ["#ff4d4d", "#ffb3b3", "#ffc107", "#ff66b2", "#c70039"];
    return colors[Math.floor(Math.random () * colors.length)];
}


function openGift() {
    const lid = document.getElementById("lid");
    const surpriseMessage = document.getElementById("surpriseMessage");


// animasi membuka tutup kotak
lid.style.transform = "rotateX(150deg) translateY(-50px)";

// tampilkan pesan kejutan
surpriseMessage.style.display = "block";

createConfetti();

}

function goBack() {
    window.location.href = "1.html";
}
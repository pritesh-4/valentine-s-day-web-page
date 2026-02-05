const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const mainGif = document.getElementById("main-gif");
const mainText = document.getElementById("main-text");

function nextPage() {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
}

const rejections = [
    { text: "No", gif: "8.gif" }, 
    { text: "Are you sure?", gif: "7.gif" },
    { text: "Pookie please...", gif: "4.gif" },
    { text: "Don't do this!", gif: "5.gif" },
    { text: "I'm gonna cry...", gif: "3.gif" },
    { text: "You're breaking my heart! 💔", gif: "6.gif" }
];

let rejectionIndex = 1;
let currentSize = 1;

noBtn.addEventListener("click", () => {
    
       if (rejectionIndex < rejections.length) {
        noBtn.innerText = rejections[rejectionIndex].text;
        mainGif.src = rejections[rejectionIndex].gif;
        mainText.innerText = "Wait... really? 🥺";
        rejectionIndex++;
    } 
       else if (rejectionIndex === rejections.length) {
        noBtn.innerText = "Okay fine...";
        mainText.innerText = "I'll just leave then... 😭";
        mainGif.src = "8.gif";
                rejectionIndex++;
    }
       else {
        noBtn.style.display = "none";
        mainText.innerText = "Just kidding! Say YES! ❤️";
                mainGif.src = "1.gif"; 
    }

     currentSize += 0.3;
    yesBtn.style.transform = `scale(${currentSize})`;
});

yesBtn.addEventListener("click", () => {
    page2.classList.add("hidden");
    page3.classList.remove("hidden");
    startConfetti();
});

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const pieces = [];
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 10 + 5,
            speed: Math.random() * 5 + 2
        });
    }
}

function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p, index) => {
        p.y += p.speed;
        if (p.y > canvas.height) pieces.splice(index, 1);
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
    });
    if (pieces.length > 0) requestAnimationFrame(updateConfetti);
}

function startConfetti() {
    createConfetti();
    updateConfetti();
}
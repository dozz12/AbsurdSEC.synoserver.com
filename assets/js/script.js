// Matrix Animation
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = canvas.width / 20;
const drops = Array.from({ length: columns }).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#FF0000";
    ctx.font = "bold 20px monospace";

    drops.forEach((y, index) => {
        const char = String.fromCharCode(Math.random() * 128);
        ctx.fillText(char, index * 20, y * 20);

        if (y * 20 > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }

        drops[index]++;
    });
}

setInterval(draw, 33);

// Form validation (Example)
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pesan telah dikirim!');
});

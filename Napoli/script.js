const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


    // === OUTER CIRCLE ===
    const outerGradient = ctx.createRadialGradient(200, 200, 50, 200, 200, 150);
    outerGradient.addColorStop(0, "#4da6ff");  // center
    outerGradient.addColorStop(1, "#0033cc");  // edge

    ctx.fillStyle = outerGradient;
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, Math.PI * 2);
    ctx.fill();

    // Outer shine (gloss)
    const outerShine = ctx.createRadialGradient(170, 150, 10, 170, 150, 100);
    outerShine.addColorStop(0, "rgba(255,255,255,0.8)");
    outerShine.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = outerShine;
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, Math.PI * 2);
    ctx.fill();

    // === INNER CIRCLE ===
    const innerGradient = ctx.createRadialGradient(200, 200, 30, 200, 200, 100);
    innerGradient.addColorStop(0, "#66b3ff");
    innerGradient.addColorStop(1, "#0033cc");

    ctx.fillStyle = innerGradient;
    ctx.beginPath();
    ctx.arc(200, 200, 110, 0, Math.PI * 2);
    ctx.fill();

    // Inner shine
    const innerShine = ctx.createRadialGradient(220, 170, 5, 220, 170, 60);
    innerShine.addColorStop(0, "rgba(255,255,255,0.7)");
    innerShine.addColorStop(1, "rgba(255,255,255,0)");

    ctx.fillStyle = innerShine;
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, Math.PI * 2);
    ctx.fill();

// Draw the letter "N"
ctx.fillStyle = "white";
ctx.font = "bold 150px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("N", 200, 210);
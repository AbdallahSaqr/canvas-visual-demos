const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

    
    // Sky gradient
    const skyGradient = ctx.createLinearGradient(0, 0, 0, 200);
    skyGradient.addColorStop(0, "#00BFFF"); 
    skyGradient.addColorStop(1, "#ffffff"); 

    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, canvas.width, 200);

    // Grass gradient
    const grassGradient = ctx.createLinearGradient(0, 200, 0, 400);
    grassGradient.addColorStop(0, "#7CFC00"); 
    grassGradient.addColorStop(1, "#ffffff"); 

    ctx.fillStyle = grassGradient;
    ctx.fillRect(0, 200, canvas.width, 200);


    // Goal
    ctx.beginPath();
    ctx.moveTo(100, 250);
    ctx.lineTo(100, 120);
    ctx.lineTo(300, 120);
    ctx.lineTo(300, 250);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

        // Add fade effect on goalpost legs
        const fade = ctx.createLinearGradient(0, 200, 0, 250);
        fade.addColorStop(0, "#000000");
        fade.addColorStop(1, "#7CFC00");
    
        ctx.strokeStyle = fade;
        ctx.lineWidth = 2;
    
        // Left leg fade
        ctx.beginPath();
        ctx.moveTo(100, 250);
        ctx.lineTo(100, 200);
        ctx.stroke();
    
        // Right leg fade
        ctx.beginPath();
        ctx.moveTo(300, 200);
        ctx.lineTo(300, 250);
        ctx.stroke();
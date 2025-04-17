const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Draw the right triangle
ctx.beginPath();
ctx.moveTo(300, 100); // Starting point (a)
ctx.lineTo(300, 400); // Vertical line (b)
ctx.lineTo(150, 400); // Horizontal line (c)
ctx.closePath(); // Close the triangle (a, b, c)
ctx.strokeStyle = 'black';
ctx.lineWidth = 2;
ctx.stroke();

// Fill the triangle with a color
ctx.fillStyle = 'rgb(255, 0, 0)'; // Fill color
ctx.fill();

// Draw the sides names
ctx.font = '20px Arial';
ctx.fillStyle = 'black'; // Text color
ctx.fillText('b', 310, 270); // Label A
ctx.fillText('a', 220, 425); // Label B
ctx.fillText('c', 190, 270); // Label C

//add text below the triangle
ctx.font = 'bold 19px Times new roman';
ctx.fillStyle = 'black';
ctx.fillText('according to Pythagorean Theorem:', 0, 500);

//add the formula
ctx.font = 'bold 25px Times new roman';
ctx.fillStyle = 'red';
const mathML = `
<math xmlns="http://www.w3.org/1998/Math/MathML" style="color: red;">
    <mi>c</mi>
    <mo>=</mo>
    <msqrt>
        <mrow>
            <msup>
                <mi>a</mi>
                <mn>2</mn>
            </msup>
            <mo>+</mo>
            <msup>
                <mi>b</mi>
                <mn>2</mn>
            </msup>
        </mrow>
    </msqrt>
</math>
`;

// Create a div to hold the MathML
const mathDiv = document.createElement('div');
mathDiv.innerHTML = mathML;
mathDiv.style.position = 'absolute';
mathDiv.style.top = '520px';
mathDiv.style.left = '10px';
mathDiv.style.fontSize = '20px';

// Append the MathML to the body
document.body.appendChild(mathDiv);

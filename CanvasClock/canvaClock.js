canvas = document.getElementById('Canvas');
ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90;

drawClock();

function drawClock() {

    ctx.beginPath();
    ctx.arc(0, 0, radius + 12, 0, 2 * Math.PI);
    ctx.fillStyle = "transparent";
    ctx.lineWidth = 1;
    ctx.setLineDash([0, 0]);
    ctx.strokeStyle = "rgba(250,250,250, 0.5)";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "transparent";
    ctx.fill('evenodd');
    ctx.lineWidth = 10;
    ctx.setLineDash([1.5, 3.5]);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.restore();


    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.setLineDash([0, 0]);
    ctx.moveTo(0, 120, );
    ctx.lineTo(0, -radius * 0.88);
    ctx.strokeStyle = "rgba(250,250,250, 0.2)";
    ctx.stroke();


    runClock();
}

function runClock() {

    var sec = new Date().getSeconds();
    var minutes = new Date().getMinutes();
    var hour = new Date().getHours();
    ctx.clearRect(-95, -95, 190, 190);

    ///seconds Hand
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([1, 1]);
    ctx.strokeStyle = "white";
    ctx.lineWidth = radius * 0.009;
    ctx.moveTo(0, 0);
    ctx.rotate(2 * Math.PI * sec / 60);
    ctx.lineTo(0, -(radius * 0.66));
    ctx.stroke();
    ctx.restore();



    /// Minute Hand
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([0, 0]);
    ctx.strokeStyle = "rgba(255,255,255, 0.7)";
    ctx.lineWidth = radius * 0.015;
    ctx.moveTo(0, 0);
    ctx.rotate(2 * Math.PI * minutes / 60);
    ctx.lineTo(0, -(radius * 0.62));
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();

    i = 0.5 * minutes / 60;
    console.log("i : ", i);

    ///Hour hand;
    hur = hour % 12;
    ctx.save();
    ctx.beginPath();
    ctx.setLineDash([0, 0]);
    ctx.strokeStyle = "white";
    ctx.lineWidth = radius * 0.02;
    ctx.moveTo(0, 0);
    ctx.rotate((2 * Math.PI * hur / 12) + i);
    ctx.lineTo(0, -(radius * 0.50));
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.restore();

    //// center-ring

    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, 0.02 * radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "white";
    ctx.fillStyle = "rgb(101, 91, 241)";
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.setLineDash([0, 0]);
    ctx.stroke();
    ctx.restore();
    // document.getElementById('time').innerHTML= hour + ' : ' + minutes + ': '+sec;
}


function clock() {
    drawClock();
    var cunt = 0;

    setInterval(function () {
        runClock();
        cunt++;
    }, 1000);
}

clock();
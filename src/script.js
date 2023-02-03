window.onload = () => {
    
    var canvas = document.getElementById("canvas") 
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.rect(10, 10, 10, 10);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}
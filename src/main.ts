const canvas: HTMLCanvasElement | null = document.getElementById(
  "myCanvas"
) as HTMLCanvasElement;

if (canvas) {
  const ctx = canvas.getContext("2d");

  if (ctx) {
    ctx.beginPath();
    ctx.moveTo(50, 200);
    ctx.lineTo(150, 50);
    ctx.lineTo(250, 200);
    ctx.closePath();

    ctx.fillStyle = "green";
    ctx.fill();
  } else {
    console.error("Could not get 2D context");
  }
} else {
  console.error("Canvas element not found");
}

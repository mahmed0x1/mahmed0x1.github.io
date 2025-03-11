// Global constants
const canvas = document.getElementById("glCanvas"); // Get the canvas element
const gl = canvas.getContext("webgl2"); // Get the WebGL2 context

if (!gl) {
  console.error("WebGL 2 is not supported by your browser.");
}

// Set canvas size: 현재 window 전체를 canvas로 사용
canvas.width = 500;
canvas.height = 500;

// Initialize WebGL settings: viewport and clear color
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.1, 0.2, 0.3, 1.0);

// Start rendering
render();

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT);
  // Draw something here
  gl.enable(gl.SCISSOR_TEST);

  // top right
  gl.scissor(
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 2,
    canvas.height / 2
  );
  gl.clearColor(1, 0, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // top left
  gl.scissor(0, canvas.height / 2, canvas.width / 2, canvas.height / 2);
  gl.clearColor(0, 1, 0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // bottom left
  gl.scissor(0, 0, canvas.width / 2, canvas.height / 2);
  gl.clearColor(0, 0, 1, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // bottom right
  gl.scissor(canvas.width / 2, 0, canvas.width / 2, canvas.height / 2);
  gl.clearColor(1, 0, 1, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.disable(gl.SCISSOR_TEST);
}

// Resize viewport when window size changes
window.addEventListener("resize", () => {
  canvas.width = Math.min(500, window.innerWidth, window.innerHeight);
  canvas.height = Math.min(500, window.innerWidth, window.innerHeight);
  gl.viewport(0, 0, canvas.width, canvas.height);
  render();
});

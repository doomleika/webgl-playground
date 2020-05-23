const canvas = <HTMLCanvasElement>document.getElementById(`canvas`);
const gl = canvas.getContext('webgl');

const vshader = `
void main() {
  // Set vertex position: vec4(X, Y, Z, 1.0)
  gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
  // Point size in pixels: float
  gl_PointSize = 10.0;
}
`;
const fshader = `
precision mediump float;
void main() {
  // Set fragment color: vec4(r, g, b, alpha)
  gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}`;

const vs = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vs, vshader);
gl.compileShader(vs);

const fs = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fs, fshader);
gl.compileShader(fs);

const program = gl.createProgram();
gl.attachShader(program, vs);
gl.attachShader(program, fs);
gl.linkProgram(program);
gl.useProgram(program);

console.log(`fragment shader: `,
  gl.getShaderInfoLog(fs) || `OK`);
console.log('program:', gl.getProgramInfoLog(program) || 'OK');

gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.drawArrays(
  gl.POINTS,
  0,
  1
);

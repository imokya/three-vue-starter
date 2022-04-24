varying vec2 vUv;
varying vec3 vColor;

void main() {
  float distance = 1.0 - length(gl_PointCoord - 0.5); 
  float color = smoothstep(0.5, 0.6, distance);

  gl_FragColor = vec4(vColor * color, 1.0);
}
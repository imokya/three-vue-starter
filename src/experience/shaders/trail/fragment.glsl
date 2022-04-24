varying float vAlpha;


void main() {
  float distance = 1.0 - length(gl_PointCoord - 0.5); 
  float color = smoothstep(0.5, 0.6, distance);
  gl_FragColor = vec4(vec3(1.0, 0.0, 0.0) * color, vAlpha);
 
}
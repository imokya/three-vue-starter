attribute float size;
attribute float alpha;
uniform float uTime;

varying float vAlpha;

void main() {
  vAlpha = alpha;
  vec3 pos = position;
  pos.x = mod(pos.x + uTime * 0.005, 6.0);
  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = size * 1.0 / -mvPosition.z;
  gl_Position = projectionMatrix * mvPosition;
}
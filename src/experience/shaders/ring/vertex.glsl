uniform float uSize;
varying vec2 vUv;

attribute float aSize; 
attribute vec3 aColor;

varying vec3 vColor;

void main() {
  vUv = uv;
  vColor = aColor;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * 1.0 / -mvPosition.z;
  gl_Position = projectionMatrix * mvPosition;
}
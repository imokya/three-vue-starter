varying vec2 vUv;
uniform sampler2D uTexture;
uniform vec3 uColor;

void main() {
  float alpha = 1.0 - texture2D(uTexture, vUv).r;
  gl_FragColor = vec4(uColor, alpha);
}
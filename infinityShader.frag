precision mediump float;
uniform float u_time;
uniform vec2 u_resolution;

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  float wave = sin(u_time + uv.x * 10.0) * cos(u_time + uv.y * 10.0);
  vec3 color = 0.5 + 0.5 * cos(u_time + vec3(uv.xyx + wave));
  gl_FragColor = vec4(color, 1.0);
}

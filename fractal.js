export function drawFractal(x, y, len) {
  if (len < 2) return;
  line(x - len, y, x + len, y);
  drawFractal(x - len, y - 10, len / 1.5);
  drawFractal(x + len, y - 10, len / 1.5);
}

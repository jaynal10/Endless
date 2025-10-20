export function endlessLoop(callback) {
  let lastTime = 0;
  function loop(time) {
    const delta = time - lastTime;
    callback(delta);
    lastTime = time;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

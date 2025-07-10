const totalRings = 9;
let baseDiameter = 2;
for (let i = 0; i < totalRings; i++) {
  const d = baseDiameter + i * 3;
  const ring = document.createElement('div');
  ring.className = 'ring';
  ring.style.width = `${d}em`;
  ring.style.height = `${d}em`;
  ring.style.margin = `-${d / 2}em 0 0 -${d / 2}em`;
  const duration = 6.3 / (totalRings - i);
  ring.style.animationDuration = `${duration}s`;
  document.body.appendChild(ring);
}
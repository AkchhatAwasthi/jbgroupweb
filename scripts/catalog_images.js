const fs = require('fs');
const path = require('path');

function getPngDimensions(filePath) {
  try {
    const buffer = Buffer.alloc(32);
    const fd = fs.openSync(filePath, 'r');
    fs.readSync(fd, buffer, 0, 32, 0);
    fs.closeSync(fd);
    if (buffer.toString('ascii', 1, 4) === 'PNG') {
      const width = buffer.readUInt32BE(16);
      const height = buffer.readUInt32BE(20);
      return { width, height };
    }
  } catch (e) {
    return null;
  }
  return null;
}

function catalog(dir) {
  const files = fs.readdirSync(dir);
  const results = [];
  for (const f of files) {
    if (!f.endsWith('.png') && !f.endsWith('.jpg')) continue;
    const fullPath = path.join(dir, f);
    const stat = fs.statSync(fullPath);
    const dims = getPngDimensions(fullPath);
    results.push({
      file: f,
      size: stat.size,
      width: dims?.width || 0,
      height: dims?.height || 0
    });
  }
  return results;
}

const sky = catalog('public/images/skyhilton');
const inn = catalog('public/images/innovation');

console.log('--- SKYHILTON TOP IMAGES (by size > 200KB) ---');
sky.filter(x => x.size > 200000).sort((a,b) => b.size - a.size).forEach(x => {
  console.log(`${x.file}: ${x.width}x${x.height} (${Math.round(x.size/1024)} KB)`);
});

console.log('\n--- INNOVATION TOP IMAGES (by size > 200KB) ---');
inn.filter(x => x.size > 200000).sort((a,b) => b.size - a.size).forEach(x => {
  console.log(`${x.file}: ${x.width}x${x.height} (${Math.round(x.size/1024)} KB)`);
});

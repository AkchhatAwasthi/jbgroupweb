const fs = require('fs');
const path = require('path');
const https = require('https');

const logos = [
  {
    name: 'jb_group_logo.png',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793174674/Untitled_design_16_mgfxoh.png'
  },
  {
    name: 'jb_skyhilton_logo.png',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793174675/Untitled_design_17_g0vnj2.png'
  },
  {
    name: 'jb_urban_sweets_logo.png',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793174674/Untitled_design_18_usfdfd.png'
  },
  {
    name: 'jb_innovations_logo.png',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793174674/innovation_png_lnfzmj.png'
  }
];

const targetDir = path.join(__dirname, '..', 'public', 'images', 'logos');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`Failed to download ${url}: status code ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading logos...');
  for (const logo of logos) {
    const dest = path.join(targetDir, logo.name);
    try {
      await downloadFile(logo.url, dest);
      const stat = fs.statSync(dest);
      console.log(`Downloaded ${logo.name} (${stat.size} bytes)`);
    } catch (err) {
      console.error(`Error downloading ${logo.name}:`, err.message);
    }
  }
  console.log('Done downloading logos.');
}

run();

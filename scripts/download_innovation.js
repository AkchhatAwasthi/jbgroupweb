const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  {
    name: 'grand_jali_entrance.png',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111000/Grand_Jali_Entrance_Wedding_Venue_kuegpv.png'
  },
  {
    name: 'DSC_2803.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111211/DSC_2803_ygiidq.jpg'
  },
  {
    name: 'DSC_9767.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111211/DSC_9767_zrh0vc.jpg'
  },
  {
    name: 'DSC_0739.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111210/DSC_0739_bjyzjl.jpg'
  },
  {
    name: 'DSC_0747.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111208/DSC_0747_l8sypp.jpg'
  },
  {
    name: 'DSC_1847.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111202/DSC_1847_cesw8c.jpg'
  },
  {
    name: 'DSC_1959.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111190/DSC_1959_nmy78f.jpg'
  },
  {
    name: 'DSC_1975.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111189/DSC_1975_wtgf2d.jpg'
  },
  {
    name: 'DSC_1977.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111189/DSC_1977_lwrc51.jpg'
  },
  {
    name: 'DSC_1980.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111188/DSC_1980_ro77ff.jpg'
  },
  {
    name: 'DSC_1980_1.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111185/DSC_1980_1_kvezjj.jpg'
  },
  {
    name: 'DSC_2102.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111182/DSC_2102_eu29kn.jpg'
  },
  {
    name: 'DSC_1963.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111164/DSC_1963_mfpaxj.jpg'
  },
  {
    name: 'DSC_1953.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111165/DSC_1953_t1bowi.jpg'
  },
  {
    name: 'DSC_1965.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111163/DSC_1965_fncxpa.jpg'
  },
  {
    name: 'DSC_1954.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111166/DSC_1954_d9mbik.jpg'
  },
  {
    name: 'DSC_1955.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111160/DSC_1955_vgg0of.jpg'
  },
  {
    name: 'DSC_1973.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111161/DSC_1973_sxejxt.jpg'
  },
  {
    name: '4th.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111144/4th_m4iq8m.jpg'
  },
  {
    name: '1st.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111117/1st_dpw5mj.jpg'
  },
  {
    name: '1.jpg',
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793111107/1_uckmia.jpg'
  }
];

const targetDir = path.join(__dirname, '..', 'public', 'images', 'innovation');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join(targetDir, item.name);
    const file = fs.createWriteStream(dest);
    https.get(item.url, response => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(() => {
            const size = fs.statSync(dest).size;
            console.log(`Downloaded ${item.name} (${(size / 1024 / 1024).toFixed(2)} MB)`);
            resolve();
          });
        });
      } else {
        reject(new Error(`Failed to download ${item.url}: status ${response.statusCode}`));
      }
    }).on('error', err => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${images.length} images for JB Innovation...`);
  for (const img of images) {
    try {
      await downloadFile(img);
    } catch (e) {
      console.error(e.message);
    }
  }
  console.log('Finished downloading all JB Innovation images.');
}

run();

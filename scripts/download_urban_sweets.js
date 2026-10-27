const https = require('https');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '..', 'public', 'images', 'urban-sweets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const images = [
  // Sweet Shop Interior
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793101529/Urban_Sweets_Bakers_Counter_navwqa.png',
    dest: 'sweet_shop_counter.png'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793101529/Urban_Sweets_Bakers_Interior_Display_gw9u2d.png',
    dest: 'sweet_shop_interior_display.png'
  },
  // Restaurant & Food
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102496/DSC_8552.JPG_xixdft.jpg',
    dest: 'restaurant_dining_1.jpg'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102495/DSC_8556.JPG_g8hnwg.jpg',
    dest: 'restaurant_dining_2.jpg'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102495/DSC_8672.JPG_ofnotd.jpg',
    dest: 'food_dish_1.jpg'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102494/DSC_8558.JPG_teqegw.jpg',
    dest: 'restaurant_dining_3.jpg'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102494/DSC_8557.JPG_enedaf.jpg',
    dest: 'restaurant_dining_4.jpg'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102493/DSC_8727.JPG_gxbcgh.jpg',
    dest: 'food_dish_2.jpg'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102702/Lavish_Terrace_Dining_Spread_navutg.png',
    dest: 'terrace_dining_spread.png'
  },
  // Luxury Gifting
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102868/file_00000000813c8210b6729504c0c0f677_yitybb.png',
    dest: 'luxury_gift_box_1.png'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102867/file_0000000081e0821093d86ffbfd90edcd_krvygx.png',
    dest: 'luxury_gift_box_2.png'
  },
  // Banquets
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102932/DSC_3093.JPG_zumux0.jpg',
    dest: 'banquet_hall_1.jpg'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102932/DSC_3092.JPG_ovw7ic.jpg',
    dest: 'banquet_hall_2.jpg'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102935/WhatsApp_Image_2024-10-25_at_14.50.53_1_yn0i4f.jpg',
    dest: 'banquet_setup_1.jpg'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102935/DSC_4880.JPG_ykoeik.jpg',
    dest: 'banquet_hall_3.jpg'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102938/DSC_3077.JPG_dmk5c4.jpg',
    dest: 'banquet_hall_4.jpg'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102939/DSC_4884.JPG_ccrk4r.jpg',
    dest: 'banquet_hall_5.jpg'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793102939/DSC_4881.JPG_bk9hwl.jpg',
    dest: 'banquet_hall_6.jpg'
  }
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return download(response.headers.location, dest).then(resolve).catch(reject);
      }
      if (response.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: status ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve());
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${images.length} Urban Sweets images...`);
  for (const img of images) {
    const destPath = path.join(targetDir, img.dest);
    try {
      await download(img.url, destPath);
      const stat = fs.statSync(destPath);
      console.log(`✓ Downloaded ${img.dest} (${Math.round(stat.size / 1024)} KB)`);
    } catch (e) {
      console.error(`✗ Error downloading ${img.dest}:`, e.message);
    }
  }
  console.log('All downloads completed!');
}

run();

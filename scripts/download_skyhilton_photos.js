const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  // Rooms
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793004388/Warm_Modern_Hotel_Suite_Retreat_mrbbyr.png',
    dest: 'public/images/skyhilton/suite_retreat.png'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793004388/Elegant_Symmetrical_Hotel_Bedroom_regbn6.png',
    dest: 'public/images/skyhilton/deluxe_bedroom.png'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793004389/Elegant_Modern_Hotel_Room_Retreat_dc7b34.png',
    dest: 'public/images/skyhilton/standard_room.png'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793004400/Modern_Lounge_with_Blue_Accents_mur2vd.png',
    dest: 'public/images/skyhilton/elite_lounge.png'
  },

  // Bar and Dine In
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793004398/Skyhilton__Warm_Wooden_Rooftop_Lounge_flampl.png',
    dest: 'public/images/skyhilton/bar_wooden_lounge.png'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793004397/Warm_Rooftop_Bar_at_Dusk_eq3lje.png',
    dest: 'public/images/skyhilton/bar_dusk.png'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793004399/Skyhilton_Neon_Rooftop_Lounge_gbnw7l.png',
    dest: 'public/images/skyhilton/bar_neon_lounge.png'
  },

  // Cafe and Rooftop Dine In
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793004391/Botanical_Green_and_White_Restaurant_Interior_lb1zuc.png',
    dest: 'public/images/skyhilton/restaurant_botanical.png'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793004390/Modern_Coffee_Shop_Interior_with_Velvet_Seating_nfkktp.png',
    dest: 'public/images/skyhilton/cafe_velvet.png'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793004390/Modern_Skyhilton_Courtyard_Dining_cfxdta.png',
    dest: 'public/images/skyhilton/courtyard_dining.png'
  },
  {
    url: 'https://res.cloudinary.com/dmj0smemf/image/upload/v1793004398/Sunlit_Skyhilton_Rooftop_Terrace_zcmgnb.png',
    dest: 'public/images/skyhilton/rooftop_terrace.png'
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.resolve(item.dest));
    https.get(item.url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, (res2) => {
          res2.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${item.dest}`);
            resolve();
          });
        }).on('error', reject);
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${item.url}: status ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${item.dest}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(item.dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading 11 Skyhilton images...');
  for (const item of images) {
    try {
      await download(item);
    } catch (e) {
      console.error(e.message);
    }
  }
  console.log('Finished downloads.');
}

run();

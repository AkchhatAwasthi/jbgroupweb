const fs = require('fs');
const path = require('path');

function copyIfExist(src, dest) {
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Copied:', path.basename(dest));
  } else {
    console.warn('Missing:', src);
  }
}

// Skyhilton mappings
const skyDir = 'public/images/skyhilton';
copyIfExist(`${skyDir}/page_1_screenshot.png`, `${skyDir}/hotel_hero.png`);
copyIfExist(`${skyDir}/page_2_screenshot.png`, `${skyDir}/restaurant_hero.png`);
copyIfExist(`${skyDir}/page_2_image_21.png`, `${skyDir}/restaurant_dish.png`);
copyIfExist(`${skyDir}/page_3_screenshot.png`, `${skyDir}/bar_hero.png`);
copyIfExist(`${skyDir}/page_3_image_25.png`, `${skyDir}/bar_interior.png`);
copyIfExist(`${skyDir}/page_3_image_26.png`, `${skyDir}/bar_drinks.png`);
copyIfExist(`${skyDir}/page_3_image_29.png`, `${skyDir}/bar_lounge.png`);
copyIfExist(`${skyDir}/page_4_screenshot.png`, `${skyDir}/cafe_hero.png`);
copyIfExist(`${skyDir}/page_4_image_30.png`, `${skyDir}/cafe_interior.png`);
copyIfExist(`${skyDir}/page_5_screenshot.png`, `${skyDir}/events_hero.png`);
copyIfExist(`${skyDir}/page_5_image_35.png`, `${skyDir}/events_decor.png`);
copyIfExist(`${skyDir}/page_6_screenshot.png`, `${skyDir}/infinity_hero.png`);
copyIfExist(`${skyDir}/page_6_image_40.png`, `${skyDir}/infinity_hall.png`);
copyIfExist(`${skyDir}/page_6_image_39.png`, `${skyDir}/infinity_buffet.png`);
copyIfExist(`${skyDir}/page_7_screenshot.png`, `${skyDir}/open_terrace_hero.png`);
copyIfExist(`${skyDir}/page_7_image_43.png`, `${skyDir}/open_terrace.png`);
copyIfExist(`${skyDir}/page_7_image_46.png`, `${skyDir}/open_terrace_view.png`);
copyIfExist(`${skyDir}/page_8_screenshot.png`, `${skyDir}/vip_hero.png`);
copyIfExist(`${skyDir}/page_8_image_53.png`, `${skyDir}/vip_hall.png`);
copyIfExist(`${skyDir}/page_8_image_49.png`, `${skyDir}/vip_dining.png`);
copyIfExist(`${skyDir}/page_9_screenshot.png`, `${skyDir}/upper_deck_hero.png`);
copyIfExist(`${skyDir}/page_9_image_56.png`, `${skyDir}/upper_deck.png`);
copyIfExist(`${skyDir}/page_10_screenshot.png`, `${skyDir}/rooms_hero.png`);
copyIfExist(`${skyDir}/page_11_screenshot.png`, `${skyDir}/rooms_gallery.png`);
copyIfExist(`${skyDir}/page_11_image_79.png`, `${skyDir}/room_standard.png`);
copyIfExist(`${skyDir}/page_11_image_82.png`, `${skyDir}/room_elite.png`);
copyIfExist(`${skyDir}/page_11_image_84.png`, `${skyDir}/room_deluxe.png`);
copyIfExist(`${skyDir}/page_11_image_90.png`, `${skyDir}/room_suite.png`);

// Innovation mappings
const innDir = 'public/images/innovation';
copyIfExist(`${innDir}/page_1_screenshot.png`, `${innDir}/hero.png`);
copyIfExist(`${innDir}/page_2_image_3.png`, `${innDir}/lawns_entrance.png`);
copyIfExist(`${innDir}/page_2_screenshot.png`, `${innDir}/lawns_overview.png`);
copyIfExist(`${innDir}/page_3_image_6.png`, `${innDir}/rooms_hero.png`);
copyIfExist(`${innDir}/page_4_image_17.png`, `${innDir}/room_deluxe.png`);
copyIfExist(`${innDir}/page_4_image_18.png`, `${innDir}/room_executive.png`);
copyIfExist(`${innDir}/page_4_screenshot.png`, `${innDir}/rooms_overview.png`);
copyIfExist(`${innDir}/page_5_image_19.png`, `${innDir}/crown_hall.png`);
copyIfExist(`${innDir}/page_5_screenshot.png`, `${innDir}/crown_hall_hero.png`);
copyIfExist(`${innDir}/page_6_image_21.png`, `${innDir}/kanishk_hall.png`);
copyIfExist(`${innDir}/page_6_screenshot.png`, `${innDir}/kanishk_hall_hero.png`);
copyIfExist(`${innDir}/page_7_image_23.png`, `${innDir}/lawns_banquets.png`);
copyIfExist(`${innDir}/page_7_screenshot.png`, `${innDir}/lawns_hero.png`);
copyIfExist(`${innDir}/page_8_image_31.png`, `${innDir}/heritage.png`);
copyIfExist(`${innDir}/page_8_screenshot.png`, `${innDir}/heritage_hero.png`);
copyIfExist(`${innDir}/page_9_image_36.png`, `${innDir}/carnations_restaurant.png`);
copyIfExist(`${innDir}/page_9_screenshot.png`, `${innDir}/carnations_hero.png`);
copyIfExist(`${innDir}/page_10_image_44.png`, `${innDir}/open_terrace.png`);
copyIfExist(`${innDir}/page_10_screenshot.png`, `${innDir}/terrace_hero.png`);
copyIfExist(`${innDir}/page_11_screenshot.png`, `${innDir}/location_map.png`);

console.log('Finished copying semantic photos.');

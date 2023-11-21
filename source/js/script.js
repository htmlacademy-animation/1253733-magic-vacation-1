// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import screenLoading from './modules/screenLoading.js';
import AccentTypographyBuild from './modules/accentTypographyBuild.js';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();
screenLoading();


const fullPageScroll = new FullPageScroll();
fullPageScroll.init();

const animationTopScreenTextLine = new AccentTypographyBuild(`.intro__title`, 500, `active`, `transform`);
setTimeout(()=>{
  animationTopScreenTextLine.runAnimation();
}, 500);

const animationTopScreenTextLineData = new AccentTypographyBuild(`.intro__date`, 500, `active`, `transform`);
setTimeout(()=>{
  animationTopScreenTextLineData.runAnimation();
}, 10000);

const animationTopTitleHistory = new AccentTypographyBuild(`.slider__item-title`, 500, `active`, `transform`);
setTimeout(()=>{
  animationTopTitleHistory.runAnimation();
}, 500);

const animationTopTitlePrize = new AccentTypographyBuild(`.prizes__title`, 500, `active`, `transform`);
setTimeout(()=>{
  animationTopTitlePrize.runAnimation();
}, 500);


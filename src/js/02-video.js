import Vimeo from '@vimeo/player';
import trottle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const storageKey = 'videoplayer-current-time';
player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', trottle(setTimeToLocale, 1000));
function setTimeToLocale(currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(storageKey, JSON.stringify(seconds));
}
player.setCurrentTime(JSON.parse(localStorage.getItem(storageKey)));

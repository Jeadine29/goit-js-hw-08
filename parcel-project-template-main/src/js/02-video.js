import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

// Initialize Vimeo player
const player = new Vimeo(document.getElementById('vimeo-player'));


const savePlaybackTime = throttle(() => {
  player.getCurrentTime().then(time => {
    localStorage.setItem('videoplayer-current-time', time);
  });
}, 1000); 

function resumePlayback() {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
}

player.on('timeupdate', savePlaybackTime);

resumePlayback();

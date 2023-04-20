export const updateText = () => {
  const audioPlayerText = document.querySelector('.audio-player-text');
  const now = new Date();
  const hours = now.getHours();
  if (hours === 20 && minutes >= 24) {
    audioPlayerText.textContent = 'New text for 5pm';
  } else if (hours === 18) {
    audioPlayerText.textContent = 'New text for 6pm';
  } else if (hours === 19) {
    audioPlayerText.textContent = 'New text for 7pm';
  } else if (hours === 20) {
    audioPlayerText.textContent = 'New text for 8pm';
  } else if (hours === 21) {
    audioPlayerText.textContent = 'New text for 9pm';
  } else if (hours === 22) {
    audioPlayerText.textContent = 'New text for 10pm';
  } else {
    audioPlayerText.textContent = 'Default text for audio player';
  }
};

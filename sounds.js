const volumeNaturePercent = document.querySelector('.volumeNaturePercent')
const volumeRain = document.querySelector('.volumeRain')
const volumeRainPercent = document.querySelector('.volumeRainPercent')
const volumeStore = document.querySelector('.volumeStore')
const volumeStorePercent = document.querySelector('.volumeStorePercent')
const volumeFirepit = document.querySelector('.volumeFirepit')
const volumeFirepitPercent = document.querySelector('.volumeFirepitPercent')
const volumeNature = document.querySelector('.volumeNature')

const sounds = {
  nature:
    'https://github.com/ysafronau/nature-sounds/blob/gh-pages/assets/audio/forest.mp3?raw=true',
  rain: 'https://github.com/wacko/rainsound/blob/master/rain.mp3?raw=true',
  store:
    'https://github.com/JaDogg/noisebox/blob/main/noise/cut1_482990__priesjensen__people-talking-at-cafe-ambience.wav?raw=true',
  firepit:
    'https://github.com/petrovicstefanrs/chillnsound/blob/master/app/sounds/fire.mp3?raw=true'
}

let arrSounds = {}
Object.keys(sounds).forEach(value => {
  arrSounds[value] = new Audio(sounds[value])
})

export default function Sound(bgsound) {
  function play(bgsound) {
    arrSounds[bgsound].play()
    arrSounds[bgsound].volume = 0.5
    arrSounds[bgsound].loop = true
  }

  function pause(bgsound) {
    arrSounds[bgsound].pause()
  }

  function volumeControl(element) {
    switch (element) {
      case 'volumeNature':
        arrSounds['nature'].volume = Number(volumeNature.value) / 100
        break
      case 'volumeRain':
        arrSounds['rain'].volume = Number(volumeRain.value) / 100
        break
      case 'volumeStore':
        arrSounds['store'].volume = Number(volumeStore.value) / 100
        break
      case 'volumeFirepit':
        arrSounds['firepit'].volume = Number(volumeFirepit.value) / 100
    }
  }

  function volumeBarView(element) {
    element.nextElementSibling.textContent = element.value
      .toString()
      .padStart(2, '0')
      .concat('%')
    element.nextElementSibling.style.left = element.value.concat('rem')
  }

  return {
    volumeNaturePercent,
    volumeRain,
    volumeRainPercent,
    volumeStore,
    volumeStorePercent,
    volumeFirepit,
    volumeFirepitPercent,
    volumeControl,
    play,
    pause,
    volumeBarView
  }
}

import {
  btnMoon,
  btnSun,
  btnPlay,
  btnPause,
  btnStop,
  btnPlus,
  btnMinus,
  cardNature,
  cardRain,
  cardStore,
  cardFirepit,
  bntNature,
  btnRain,
  btnStore,
  btnFirepit
} from './elements.js'

// import {
//   volumeNature,
//   volumeRain,
//   volumeStore,
//   volumeFirepit
// } from './sounds.js'

import Sound from './sounds.js'
import Timer from './timer.js'

const timer = Timer()
const sound = Sound()

const volumeNature = document.querySelector('.volumeNature')
const volumeRain = document.querySelector('.volumeRain')
const volumeStore = document.querySelector('.volumeStore')
const volumeFirepit = document.querySelector('.volumeFirepit')

export function togglePlayPauseBtn() {
  if (btnPause.classList.contains('hide')) {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
  } else {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')
  }
}

function toggleMoonSunBtn() {
  if (btnSun.classList.contains('hide')) {
    btnMoon.classList.add('hide')
    btnSun.classList.remove('hide')
  } else {
    btnMoon.classList.remove('hide')
    btnSun.classList.add('hide')
  }
}

function toggleLightDarkMode() {
  let Elements = document.querySelectorAll('.action-btn')
  if (document.querySelector('.content').classList.contains('dark')) {
    document.querySelector('.content').classList.remove('dark')
    document.querySelector('.timer').classList.remove('dark')
    Elements.forEach(element => element.classList.remove('dark'))
  } else {
    document.querySelector('.content').classList.add('dark')
    document.querySelector('.timer').classList.add('dark')
    Elements.forEach(element => element.classList.add('dark'))
  }
}

btnMoon.addEventListener('click', () => {
  toggleMoonSunBtn()
  toggleLightDarkMode()
})

btnSun.addEventListener('click', () => {
  toggleMoonSunBtn()
  toggleLightDarkMode()
})

btnPlay.addEventListener('click', () => {
  togglePlayPauseBtn()
  timer.countdown()
})

btnPause.addEventListener('click', () => {
  togglePlayPauseBtn()
  timer.pause()
})

btnStop.addEventListener('click', () => {
  if (btnPlay.classList.contains('hide')) {
    togglePlayPauseBtn()
  }
  timer.resetTimer()
})

btnPlus.addEventListener('click', () => {
  timer.increase()
})

btnMinus.addEventListener('click', () => {
  timer.decrease()
})

bntNature.addEventListener('click', () => {
  if (cardNature.classList.contains('activated')) {
    sound.pause(bntNature.dataset.sound)
    cardNature.classList.remove('activated')
  } else {
    cardNature.classList.add('activated')
    sound.loop = true
    sound.play(bntNature.dataset.sound)
  }
})

btnRain.addEventListener('click', () => {
  if (cardRain.classList.contains('activated')) {
    sound.pause(btnRain.dataset.sound)
    cardRain.classList.remove('activated')
  } else {
    cardRain.classList.add('activated')
    sound.loop = true
    sound.play(btnRain.dataset.sound)
  }
})

btnStore.addEventListener('click', () => {
  if (cardStore.classList.contains('activated')) {
    sound.pause(btnStore.dataset.sound)
    cardStore.classList.remove('activated')
  } else {
    cardStore.classList.add('activated')
    sound.loop = true
    sound.play(btnStore.dataset.sound)
  }
})

btnFirepit.addEventListener('click', () => {
  if (cardFirepit.classList.contains('activated')) {
    sound.pause(btnFirepit.dataset.sound)
    cardFirepit.classList.remove('activated')
  } else {
    cardFirepit.classList.add('activated')
    sound.loop = true
    sound.play(btnFirepit.dataset.sound)
  }
})

volumeNature.addEventListener('mousemove', event => {
  sound.volumeBarView(event.target)
  sound.volumeControl(event.target.classList.value)
})

volumeRain.addEventListener('mousemove', event => {
  sound.volumeBarView(event.target)
  sound.volumeControl(event.target.classList.value)
})

volumeStore.addEventListener('mousemove', event => {
  sound.volumeBarView(event.target)
  sound.volumeControl(event.target.classList.value)
})

volumeFirepit.addEventListener('mousemove', event => {
  sound.volumeBarView(event.target)
  sound.volumeControl(event.target.classList.value)
})

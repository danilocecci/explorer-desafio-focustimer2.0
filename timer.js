import { spanMinutes, spanSeconds } from './elements.js'
import { togglePlayPauseBtn } from './script.js'

export default function Timer() {
  let minutes = 25
  let seconds = 0
  let countdownTimeout

  function countdown() {
    countdownTimeout = setTimeout(() => {
      if (seconds <= 0) {
        --minutes
        spanMinutes.textContent = minutes.toString().padStart(2, '0')
        seconds = 60
      }
      --seconds
      spanSeconds.textContent = seconds.toString().padStart(2, '0')
      if ((seconds <= 0 && minutes <= 0) || minutes < 0) {
        resetTimer()
        togglePlayPauseBtn()
        return
      }
      countdown()
    }, 1000)
  }

  function resetTimer() {
    pause()
    minutes = 25
    seconds = 0
    spanSeconds.textContent = seconds.toString().padStart(2, '0')
    spanMinutes.textContent = minutes.toString().padStart(2, '0')
  }

  function pause() {
    clearTimeout(countdownTimeout)
  }

  function increase() {
    minutes += 5
    spanMinutes.textContent = minutes.toString().padStart(2, '0')
  }

  function decrease() {
    minutes -= 5
    if (minutes <= 0) {
      minutes = 0
    }
    spanMinutes.textContent = minutes.toString().padStart(2, '0')
  }

  return {
    countdown,
    resetTimer,
    pause,
    increase,
    decrease
  }
}

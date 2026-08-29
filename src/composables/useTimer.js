import { computed, ref } from 'vue'

export function useTimer() {
  const mode = ref('pomodoro')

  const modes = {
    pomodoro: 25 * 60,
    short: 5 * 60,
    long: 15 * 60,
  }

  const time = ref(modes.pomodoro)
  const isRunning = ref(false)
  let timer = null

  const formattedTime = computed(() => {
    const minutes = Math.floor(time.value / 60)
    const seconds = time.value % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  })

  const startTimer = () => {
    if (isRunning.value) {
      clearInterval(timer)
      isRunning.value = false
      return
    }

    isRunning.value = true

    timer = setInterval(() => {
      if (time.value > 0) {
        time.value--
      } else {
        clearInterval(timer)
        isRunning.value = false
      }
    }, 1000)
  }

  const resetTimer = () => {
    clearInterval(timer)
    time.value = modes[mode.value]
    isRunning.value = false
  }

  const changeMode = (newMode) => {
    clearInterval(timer)
    mode.value = newMode
    time.value = modes[newMode]
    isRunning.value = false
  }

  return {
    mode,
    time,
    isRunning,
    formattedTime,
    startTimer,
    resetTimer,
    changeMode,
  }
}
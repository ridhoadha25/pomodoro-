<script setup>
import { computed, ref } from 'vue'

import TimerMode from './TimerMode.vue'
import TimerControls from './TimerControls.vue'

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

const totalTime = computed(() => modes[mode.value])
const progress = computed(() => ((totalTime.value - time.value) / totalTime.value) * 100)

const modeLabel = computed(() => {
  if (mode.value === 'pomodoro') return 'Focus Session'
  if (mode.value === 'short') return 'Short Break'
  return 'Long Break'
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

const radius = 110
const circumference = 2 * Math.PI * radius
const strokeDashoffset = computed(() => circumference - (progress.value / 100) * circumference)
</script>

<template>
  <section class="timer-card p-8 text-center">
    <!-- Mode label pill -->
    <div class="mode-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold">
      <span class="mode-dot" :class="{ 'mode-dot--running': isRunning }"></span>
      {{ modeLabel }}
    </div>

    <!-- Mode selector -->
    <TimerMode :mode="mode" @change-mode="changeMode" />

    <!-- Circular Timer -->
    <div class="relative flex items-center justify-center my-8">
      <svg class="timer-ring" viewBox="0 0 260 260" width="260" height="260">
        <!-- Background track -->
        <circle cx="130" cy="130" :r="radius" fill="none" stroke-width="7" class="ring-track" />
        <!-- Progress arc -->
        <circle
          cx="130" cy="130" :r="radius"
          fill="none"
          stroke-width="7"
          stroke-linecap="round"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="strokeDashoffset"
          class="ring-progress"
          transform="rotate(-90 130 130)"
          style="transition: stroke-dashoffset 0.8s ease;"
        />
      </svg>

      <!-- Timer display -->
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <span class="timer-display">{{ formattedTime }}</span>
        <span class="text-xs font-medium mt-2 uppercase tracking-widest" style="color: var(--text-muted);">
          {{ isRunning ? 'running' : 'ready' }}
        </span>
      </div>
    </div>

    <TimerControls :is-running="isRunning" @start="startTimer" @reset="resetTimer" />
  </section>
</template>

<style scoped>
.timer-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-card);
  border: 1.5px solid var(--border-color);
}

.mode-pill {
  background: var(--accent-main-light);
  color: var(--text-secondary);
  border: 1px solid var(--border-strong);
}

.mode-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--text-muted);
}
.mode-dot--running {
  background: #22c55e;
  animation: pulse-dot 1.4s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.75); }
}

.ring-track {
  stroke: var(--accent-main-light);
}

.ring-progress {
  stroke: var(--accent-main);
}

.timer-display {
  font-size: 3.75rem;
  font-weight: 900;
  line-height: 1;
  color: var(--text-primary);
  font-variant-numeric: tabular-nums;
  letter-spacing: -2px;
}

@media (min-width: 768px) {
  .timer-display {
    font-size: 5rem;
  }
}
</style>
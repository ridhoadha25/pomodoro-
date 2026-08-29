<script setup>
import { ref } from 'vue'

import Navbar from './components/Navbar.vue'
import PomodoroTimer from './components/PomodoroTimer.vue'
import MusicPlayer from './components/MusicPlayer.vue'
import TaskList from './components/TaskList.vue'
import Statistics from './components/Statistics.vue'
import SettingsModal from './components/SettingsModal.vue'

const showSettings = ref(false)
</script>

<template>
  <div class="min-h-screen" style="background-color: var(--bg-primary);">
    <Navbar @open-settings="showSettings = true" />

    <main class="mx-auto max-w-6xl px-5 py-10">
      <!-- Hero headline -->
      <section class="mb-10 text-center">
        <div class="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
          style="background: var(--accent-main-light); color: var(--text-secondary); border: 1px solid var(--border-strong);">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
            <path d="M12 2a1 1 0 0 1 1 1v1.07A8.001 8.001 0 0 1 20 12a8 8 0 1 1-16 0 8.001 8.001 0 0 1 7-7.93V3a1 1 0 0 1 1-1zm0 4a6 6 0 1 0 0 12A6 6 0 0 0 12 6zm0 2a1 1 0 0 1 1 1v3.586l2.121 2.121a1 1 0 0 1-1.414 1.414l-2.414-2.414A1 1 0 0 1 11 13V9a1 1 0 0 1 1-1z"/>
          </svg>
          <span class="text-sm font-semibold">Pomodoro Focus Timer</span>
        </div>

        <h1 class="text-4xl font-black md:text-5xl leading-tight" style="color: var(--text-primary);">
          Stay Focused.
          <span style="color: var(--text-secondary);">Get Things Done.</span>
        </h1>

        <p class="mt-3 text-lg" style="color: var(--text-muted);">
          Focus, relax, and boost your productivity — one session at a time.
        </p>
      </section>

      <PomodoroTimer />

      <section class="mt-8 grid gap-6 md:grid-cols-2">
        <TaskList />
        <MusicPlayer />
      </section>

      <section class="mt-8">
        <Statistics />
      </section>
    </main>

    <SettingsModal
      v-if="showSettings"
      @close="showSettings = false"
    />
  </div>
</template>
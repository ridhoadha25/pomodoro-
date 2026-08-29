<script setup>
defineProps({
  mode: String,
})

defineEmits(['change-mode'])
</script>

<template>
  <div class="flex flex-wrap justify-center gap-2">
    <!-- Focus / Pomodoro -->
    <button
      @click="$emit('change-mode', 'pomodoro')"
      :class="mode === 'pomodoro' ? 'mode-btn--active' : 'mode-btn--idle'"
      class="mode-btn flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clip-rule="evenodd" />
      </svg>
      Focus
    </button>

    <!-- Short Break -->
    <button
      @click="$emit('change-mode', 'short')"
      :class="mode === 'short' ? 'mode-btn--active' : 'mode-btn--idle'"
      class="mode-btn flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
        <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
      </svg>
      Short Break
    </button>

    <!-- Long Break -->
    <button
      @click="$emit('change-mode', 'long')"
      :class="mode === 'long' ? 'mode-btn--active' : 'mode-btn--idle'"
      class="mode-btn flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clip-rule="evenodd" />
      </svg>
      Long Break
    </button>
  </div>
</template>

<style scoped>
.mode-btn {
  border: 1.5px solid transparent;
}

.mode-btn--idle {
  background: var(--bg-primary);
  color: var(--text-secondary);
  border-color: var(--border-strong);
}
.mode-btn--idle:hover {
  background: var(--accent-main);
  color: white;
  border-color: var(--accent-main);
}

.mode-btn--active {
  background: var(--accent-main);
  color: white;
  border-color: var(--accent-main);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
}
</style>
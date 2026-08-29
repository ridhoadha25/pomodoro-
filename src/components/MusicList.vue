<script setup>
defineProps({
  currentMusic: String,
  playlist: {
    type: Array,
    default: () => [],
  },
})

defineEmits(['change-music'])
</script>

<template>
  <div class="space-y-1.5">
    <button
      v-for="music in playlist"
      :key="music.file"
      @click="$emit('change-music', music.file)"
      :class="currentMusic === music.file ? 'music-item--active' : 'music-item--idle'"
      class="music-item flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-200"
    >
      <!-- Icons -->
      <div class="music-item-icon shrink-0">
        <!-- Lofi: headphones -->
        <template v-if="music.icon === 'headphones'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
            <path d="M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 1 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 15.75Zm.75 2.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" />
          </svg>
        </template>
        <!-- Rain: cloud -->
        <template v-else-if="music.icon === 'cloud'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
            <path fill-rule="evenodd" d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-4.233-8.386A4.985 4.985 0 0 1 4.5 9.75Z" clip-rule="evenodd" />
          </svg>
        </template>
        <!-- Ocean: waves -->
        <template v-else-if="music.icon === 'waves'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
            <path d="M6 13.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 13.5Zm0 3.75a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM3 9.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0-3.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6Z" />
          </svg>
        </template>
        <!-- Coffee Shop: beaker/cup -->
        <template v-else-if="music.icon === 'coffee'">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
            <path fill-rule="evenodd" d="M2.25 6a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 3.75a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM3 13.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H3Zm0 3.75a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H3Z" clip-rule="evenodd" />
          </svg>
        </template>
        <!-- Fallback: music note -->
        <template v-else>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
            <path fill-rule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .659.122Z" clip-rule="evenodd" />
          </svg>
        </template>
      </div>

      <!-- Name + description -->
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium leading-tight">{{ music.name }}</p>
        <p class="text-xs mt-0.5 truncate music-item-desc">{{ music.description }}</p>
      </div>

      <!-- Active checkmark -->
      <svg v-if="currentMusic === music.file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4 shrink-0 ml-1">
        <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208Z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.music-item {
  border: 1.5px solid transparent;
}

.music-item--idle {
  background: var(--bg-primary);
  color: var(--text-secondary);
  border-color: var(--border-color);
}
.music-item--idle:hover {
  background: var(--accent-main-light);
  color: var(--text-primary);
  border-color: var(--border-strong);
}
.music-item--idle .music-item-desc {
  color: var(--text-muted);
}

.music-item--active {
  background: var(--accent-main);
  color: white;
  border-color: var(--accent-main);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}
.music-item--active .music-item-desc {
  color: rgba(255, 255, 255, 0.65);
}

.music-item-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  flex-shrink: 0;
}
.music-item--idle .music-item-icon {
  background: var(--accent-main-light);
  border: 1px solid var(--border-strong);
  color: var(--text-secondary);
}
.music-item--active .music-item-icon {
  background: rgba(255, 255, 255, 0.15);
  color: white;
}
</style>
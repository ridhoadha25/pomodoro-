<script setup>
import { useMusic } from '../composables/useMusic'
import MusicList from './MusicList.vue'

const { audio, currentMusic, isPlaying, playlist, getUrl, toggleMusic, changeMusic } = useMusic()
</script>

<template>
  <section class="section-card p-6">
    <h2 class="flex items-center gap-2 text-base font-bold mb-5" style="color: var(--text-primary);">
      <div class="section-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
          <path fill-rule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V9.017 5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .659.122Z" clip-rule="evenodd" />
        </svg>
      </div>
      Focus Music
      <span class="playing-badge ml-auto" v-if="isPlaying">
        <span class="playing-dot"></span>
        Playing
      </span>
    </h2>

    <!-- Now playing -->
    <div class="now-playing-card rounded-xl px-4 py-3 mb-4 flex items-center gap-3">
      <div class="music-icon-wrap rounded-lg flex items-center justify-center shrink-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5" style="color: var(--text-secondary);">
          <path fill-rule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V9.017 5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .659.122Z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="min-w-0">
        <p class="text-xs" style="color: var(--text-muted);">Now playing</p>
        <p class="text-sm font-semibold truncate" style="color: var(--text-primary);">
          {{ playlist.find(p => p.file === currentMusic)?.name ?? currentMusic.replace('.mp3', '') }}
        </p>
        <p class="text-xs truncate" style="color: var(--text-muted);">
          {{ playlist.find(p => p.file === currentMusic)?.description ?? '' }}
        </p>
      </div>
    </div>

    <audio ref="audio" :src="getUrl(currentMusic)" @ended="isPlaying = false"></audio>

    <!-- Play/Pause button -->
    <button
      @click="toggleMusic"
      class="play-btn w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-sm mb-4 transition-all duration-200"
    >
      <template v-if="isPlaying">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
          <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
        </svg>
        Pause Music
      </template>
      <template v-else>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
          <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
        </svg>
        Play Music
      </template>
    </button>

    <MusicList
      :current-music="currentMusic"
      :playlist="playlist"
      @change-music="changeMusic"
    />
  </section>
</template>

<style scoped>
.section-card {
  background: var(--bg-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
  border: 1.5px solid var(--border-color);
}

.section-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: var(--accent-main-light);
  color: var(--text-secondary);
  border: 1px solid var(--border-strong);
}

.playing-badge {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  font-weight: 500;
  color: #16a34a;
  background: #f0fdf4;
  padding: 2px 10px;
  border-radius: 999px;
  border: 1px solid #bbf7d0;
}

.playing-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  animation: pulse-dot 1.2s infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.7); }
}

.now-playing-card {
  background: var(--bg-primary);
  border: 1.5px solid var(--border-color);
}

.music-icon-wrap {
  width: 36px;
  height: 36px;
  background: var(--accent-main-light);
  border: 1px solid var(--border-strong);
}

.play-btn {
  background: var(--accent-main);
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.play-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
</style>
<template>
  <section class="section-card p-6">
    <h2 class="flex items-center gap-2 text-base font-bold mb-5" style="color: var(--text-primary);">
      <div class="section-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
        </svg>
      </div>
      Today's Progress
    </h2>

    <div class="grid grid-cols-2 gap-3">
      <div class="stat-card rounded-xl p-4 text-center">
        <p class="text-3xl font-black" style="color: var(--text-primary);">0</p>
        <p class="text-xs font-medium mt-1" style="color: var(--text-muted);">Pomodoros</p>
      </div>

      <div class="stat-card rounded-xl p-4 text-center">
        <p class="text-3xl font-black" style="color: var(--text-primary);">0</p>
        <p class="text-xs font-medium mt-1" style="color: var(--text-muted);">Tasks Done</p>
      </div>
    </div>
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

.stat-card {
  background: var(--bg-primary);
  border: 1.5px solid var(--border-color);
  transition: all 0.2s ease;
}
.stat-card:hover {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-soft);
}
</style>
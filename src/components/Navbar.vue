<script setup>
defineEmits(['open-settings'])
</script>

<template>
  <nav class="sticky top-0 z-40 border-b" style="background: rgba(250, 249, 247, 0.88); backdrop-filter: blur(12px); border-color: var(--border-color);">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div class="flex h-9 w-9 items-center justify-center rounded-xl"
          style="background: var(--accent-main);">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="h-5 w-5">
            <path d="M12 2a1 1 0 0 1 1 1v1.07A8.001 8.001 0 0 1 20 12a8 8 0 1 1-16 0 8.001 8.001 0 0 1 7-7.93V3a1 1 0 0 1 1-1zm0 4a6 6 0 1 0 0 12A6 6 0 0 0 12 6zm0 2a1 1 0 0 1 1 1v3.586l2.121 2.121a1 1 0 0 1-1.414 1.414l-2.414-2.414A1 1 0 0 1 11 13V9a1 1 0 0 1 1-1z"/>
          </svg>
        </div>

        <span class="text-xl font-bold" style="color: var(--text-primary);">
          Focusly
        </span>
      </div>

      <!-- Settings button -->
      <button
        @click="$emit('open-settings')"
        class="focusly-btn-outline flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
          <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
        </svg>
        Settings
      </button>
    </div>
  </nav>
</template>

<style scoped>
.focusly-btn-outline {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  border: 1.5px solid var(--border-strong);
  box-shadow: var(--shadow-soft);
}
.focusly-btn-outline:hover {
  background: var(--accent-main);
  color: white;
  border-color: var(--accent-main);
  transform: translateY(-1px);
  box-shadow: var(--shadow-card);
}
</style>
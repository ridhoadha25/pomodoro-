<script setup>
defineEmits(['close'])
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-5"
    style="background: rgba(0,0,0,0.35); backdrop-filter: blur(4px);"
  >
    <div class="modal-card w-full max-w-md p-6">
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="flex items-center gap-2 text-lg font-bold" style="color: var(--text-primary);">
          <div class="section-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
              <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clip-rule="evenodd" />
            </svg>
          </div>
          Settings
        </h2>

        <button
          @click="$emit('close')"
          class="close-btn rounded-xl p-2 transition-all duration-200"
          title="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <!-- Fields -->
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-semibold mb-1.5" style="color: var(--text-primary);">
            Focus Duration (minutes)
          </label>
          <input
            type="number" value="25" min="1" max="60"
            class="settings-input w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
          />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-1.5" style="color: var(--text-primary);">
            Short Break (minutes)
          </label>
          <input
            type="number" value="5" min="1" max="30"
            class="settings-input w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
          />
        </div>

        <div>
          <label class="block text-sm font-semibold mb-1.5" style="color: var(--text-primary);">
            Long Break (minutes)
          </label>
          <input
            type="number" value="15" min="1" max="60"
            class="settings-input w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all"
          />
        </div>

        <button
          @click="$emit('close')"
          class="save-btn w-full flex items-center justify-center gap-2 rounded-xl py-3 font-semibold text-sm transition-all duration-200 mt-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
            <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 0 1 1.04-.208Z" clip-rule="evenodd" />
          </svg>
          Save Settings
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-card {
  background: var(--bg-secondary);
  border-radius: var(--radius-lg);
  box-shadow: 0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08);
  border: 1.5px solid var(--border-color);
  animation: modal-in 0.2s ease;
}

@keyframes modal-in {
  from { opacity: 0; transform: scale(0.96) translateY(8px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
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

.close-btn {
  color: var(--text-muted);
  border: 1.5px solid var(--border-color);
}
.close-btn:hover {
  background: #fee2e2;
  color: #ef4444;
  border-color: #fca5a5;
}

.settings-input {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1.5px solid var(--border-strong);
  font-family: 'Inter', sans-serif;
}
.settings-input:focus {
  border-color: var(--accent-main);
  box-shadow: 0 0 0 3px rgba(0,0,0,0.06);
}

.save-btn {
  background: var(--accent-main);
  color: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.save-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
</style>
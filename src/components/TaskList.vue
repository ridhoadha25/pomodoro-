<script setup>
import { ref, watch } from 'vue'

const STORAGE_KEY = 'focusly-tasks'

// Load tasks dari localStorage saat pertama kali dibuka
const savedTasks = localStorage.getItem(STORAGE_KEY)
const tasks = ref(savedTasks ? JSON.parse(savedTasks) : [])

const newTask = ref('')

// Auto-save ke localStorage setiap ada perubahan tasks
watch(tasks, (val) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
}, { deep: true })

const addTask = () => {
  if (!newTask.value.trim()) return
  tasks.value.push({
    id: Date.now(),
    title: newTask.value.trim(),
    completed: false,
  })
  newTask.value = ''
}

const deleteTask = (id) => {
  tasks.value = tasks.value.filter((task) => task.id !== id)
}
</script>

<template>
  <section class="section-card p-6">
    <h2 class="flex items-center gap-2 text-base font-bold mb-5" style="color: var(--text-primary);">
      <div class="section-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
          <path fill-rule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clip-rule="evenodd" />
          <path fill-rule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z" clip-rule="evenodd" />
        </svg>
      </div>
      Today's Tasks
      <span class="task-count ml-auto">{{ tasks.filter(t => !t.completed).length }} left</span>
    </h2>

    <form @submit.prevent="addTask" class="flex gap-2 mb-5">
      <input
        v-model="newTask"
        placeholder="Add a task..."
        class="task-input w-full rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-200"
      />
      <button type="submit" class="task-add-btn rounded-xl px-4 py-2.5 font-bold transition-all duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
          <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
        </svg>
      </button>
    </form>

    <div class="space-y-2">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="task-item flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200"
      >
        <label class="flex cursor-pointer items-center gap-3 flex-1 min-w-0">
          <input
            v-model="task.completed"
            type="checkbox"
            class="task-checkbox h-4 w-4 cursor-pointer rounded"
          />
          <span
            class="text-sm font-medium truncate transition-all duration-200"
            :style="task.completed ? 'color: var(--text-muted); text-decoration: line-through;' : 'color: var(--text-primary);'"
          >
            {{ task.title }}
          </span>
        </label>

        <button
          @click="deleteTask(task.id)"
          class="task-delete ml-3 shrink-0 rounded-lg p-1 transition-all duration-200"
          title="Delete task"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
            <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>

      <p v-if="tasks.length === 0" class="py-6 text-center text-sm" style="color: var(--text-muted);">
        No tasks yet. Add one above!
      </p>
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

.task-count {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--text-muted);
  background: var(--accent-main-light);
  padding: 2px 10px;
  border-radius: 999px;
  border: 1px solid var(--border-strong);
}

.task-input {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1.5px solid var(--border-strong);
  font-size: 0.875rem;
}
.task-input::placeholder { color: var(--text-muted); }
.task-input:focus {
  border-color: var(--accent-main);
  box-shadow: 0 0 0 3px rgba(0,0,0,0.06);
}

.task-add-btn {
  background: var(--accent-main);
  color: white;
  flex-shrink: 0;
}
.task-add-btn:hover {
  background: var(--accent-hover);
  transform: translateY(-1px);
}

.task-item {
  background: var(--bg-primary);
  border: 1.5px solid var(--border-color);
}
.task-item:hover {
  border-color: var(--border-strong);
  box-shadow: var(--shadow-soft);
}

.task-checkbox {
  accent-color: var(--accent-main);
  flex-shrink: 0;
}

.task-delete {
  color: var(--text-muted);
}
.task-delete:hover {
  background: #fee2e2;
  color: #ef4444;
}
</style>
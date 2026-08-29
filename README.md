# 🎯 Focusly

**Focusly** adalah aplikasi produktivitas modern yang dirancang untuk membantu kamu tetap fokus, terorganisir, dan produktif setiap harinya. Dibangun dengan pendekatan teknik **Pomodoro** — metode manajemen waktu yang terbukti efektif meningkatkan konsentrasi dan mengurangi kelelahan mental.

Focusly menggabungkan tiga elemen penting dalam satu tampilan yang bersih dan nyaman dipandang:

- 🧠 **Fokus Deep Work** — sesi kerja terstruktur dengan timer yang jelas dan progress visual
- 🎵 **Musik Ambient** — pilihan suara latar yang dirancang untuk meningkatkan konsentrasi
- 📋 **Manajemen Tugas** — catat dan kelola daftar pekerjaan harian kamu secara mudah

Dengan desain **minimalis hitam & putih cream**, Focusly tidak mengganggu — ia justru mendukung flow kerja kamu tanpa distraksi visual yang berlebihan.

---

## ✨ Fitur

- ⏱️ **Pomodoro Timer** — Focus, Short Break, Long Break dengan progress ring
- ✅ **Task List** — Tambah, centang, dan hapus tugas (tersimpan di localStorage)
- 🎵 **Focus Music** — Putar musik ambient: Lofi, Rain, Ocean, Forest, Coffee Shop
- ⚙️ **Settings** — Atur durasi sesi sesuai kebutuhan

---

## 🚀 Cara Menjalankan

```bash
# Install dependencies
npm install

# Jalankan dev server
npm run dev

# Build untuk production
npm run build
```

---

## 🛠️ Tech Stack

| | |
|---|---|
| Framework | Vue 3 (`<script setup>`) |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 + Custom CSS |
| State | Vue Composables + localStorage |

---

## 📁 Struktur Project

```
src/
├── components/
│   ├── Navbar.vue
│   ├── PomodoroTimer.vue
│   ├── TimerMode.vue
│   ├── TimerControls.vue
│   ├── TaskList.vue
│   ├── MusicPlayer.vue
│   ├── MusicList.vue
│   ├── Statistics.vue
│   └── SettingsModal.vue
├── composables/
│   └── useMusic.js
├── assets/
│   └── music/
└── style.css
```

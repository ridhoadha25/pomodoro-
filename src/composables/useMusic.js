import { ref } from 'vue'

// Resolve audio assets the Vite way so they work in both dev & prod
const musicFiles = {
  'Loffi.mp3':  new URL('../assets/music/Loffi.mp3',  import.meta.url).href,
  'Rain.mp3':   new URL('../assets/music/Rain.mp3',   import.meta.url).href,
  'Ocean.mp3':  new URL('../assets/music/Ocean.mp3',  import.meta.url).href,
  'Coffe.mp3':  new URL('../assets/music/Coffe.mp3',  import.meta.url).href,
}

export function useMusic() {
  const audio = ref(null)
  const currentMusic = ref('Lofi.mp3')
  const isPlaying = ref(false)

  const playlist = [
    { name: 'Lofi',         file: 'Lofi.mp3',  icon: 'headphones', description: 'Chill beats to focus' },
    { name: 'Rain',         file: 'Rain.mp3',   icon: 'cloud',      description: 'Gentle rain sounds'   },
    { name: 'Ocean',        file: 'Ocean.mp3',  icon: 'waves',      description: 'Calming ocean waves'  },
    { name: 'Coffee Shop',  file: 'Coffe.mp3',  icon: 'coffee',     description: 'Café ambience'        },
  ]

  // Helper: get the resolved URL for a given filename
  const getUrl = (filename) => musicFiles[filename] ?? ''

  const toggleMusic = () => {
    if (!audio.value) return

    if (isPlaying.value) {
      audio.value.pause()
    } else {
      audio.value.play()
    }

    isPlaying.value = !isPlaying.value
  }

  const changeMusic = (music) => {
    currentMusic.value = music
    isPlaying.value = false

    if (audio.value) {
      audio.value.load()
    }
  }

  return {
    audio,
    currentMusic,
    isPlaying,
    playlist,
    getUrl,
    toggleMusic,
    changeMusic,
  }
}
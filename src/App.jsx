import { useState, useRef, useEffect } from 'react'
import { Home, Search, Library, Play, Pause, SkipBack, SkipForward, Volume, Volume1, Volume2, VolumeX, Shuffle, Repeat, ChevronLeft, ChevronRight, X, Clock, MoreHorizontal } from 'lucide-react'

function App() {
  const audioRef = useRef(null)
  const [currentScreen, setCurrentScreen] = useState('login')
  const [currentView, setCurrentView] = useState('home')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const prevVolumeRef = useRef(volume)
  const [currentTrack, setCurrentTrack] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [loginError, setLoginError] = useState('')
  const [lightboxImage, setLightboxImage] = useState(null)
  const [wrappedPage, setWrappedPage] = useState(0)
  const [isShuffle, setIsShuffle] = useState(false)
  const [repeatMode, setRepeatMode] = useState('off') // 'off', 'all', 'one'
  const [currentSong, setCurrentSong] = useState({
    title: 'something about you',
    artist: 'Arash Buana, RIMALDI',
    album: 'something about you',
    cover: 'https://i.scdn.co/image/ab67616d0000b2739db0f71d794d0e158b481409',
    progress: 15
  })

  // Initialize audio element on mount
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio()
    }
  }, [])

  // Helper function to format seconds to MM:SS
  const formatTime = (seconds) => {
    if (!isFinite(seconds) || isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const memories = [
    { id: 1, src: 'https://i.imgur.com/zEJ5riR.jpeg', caption: 'First P5!' },
    { id: 2, src: 'https://i.imgur.com/ElWKZOC.jpeg', caption: 'Second P5!' },
    { id: 3, src: 'https://i.imgur.com/dn0H6D7.jpeg', caption: 'First Date!' },
    { id: 4, src: 'https://i.imgur.com/9CDvgBn.jpeg', caption: 'Fun Walk!' },
    { id: 5, src: 'https://i.imgur.com/JStd1N2.png', caption: 'SAP!' },
    { id: 6, src: 'https://i.imgur.com/eQ59396.jpeg', caption: 'Second Date!' },
    { id: 7, src: 'https://i.imgur.com/zVVGkJr.jpeg', caption: 'Biman!' },
    { id: 8, src: 'https://i.imgur.com/w5eP1QP.jpeg', caption: '3rd of December!' },
    { id: 9, src: 'https://i.imgur.com/YsK9wLg.jpeg', caption: 'The last date of 2025!' }
  ]

  const loveSongs = [
    {
      id: 1,
      title: 'something about you',
      artist: 'Arash Buana',
      album: 'something about you',
      duration: '4:18',
      cover: 'https://i.scdn.co/image/ab67616d0000b2739db0f71d794d0e158b481409',
      src: '/music/something about you.mp3'
    },
    {
      id: 2,
      title: 'About You',
      artist: 'The 1975',
      album: 'Being Funny in a Foreign Language',
      duration: '5:26',
      cover: 'https://upload.wikimedia.org/wikipedia/en/d/d7/The_1975_-_Being_Funny_in_a_Foreign_Language.png',
      src: '/music/about you.mp3'
    },
    {
      id: 3,
      title: "You'll Be in My Heart",
      artist: 'NIKI',
      album: "You'll Be in My Heart",
      duration: '4:12',
      cover: 'https://i.scdn.co/image/ab67616d00001e027cd329ea4a204a8a47caf3d5',
      src: '/music/niki.mp3'
    },
    {
      id: 4,
      title: 'I Would Hate You If I Could',
      artist: 'Turnover',
      album: 'Peripheral Vision',
      duration: '3:56',
      cover: 'https://i.scdn.co/image/ab67616d00001e028810645138bfcbd3707f2290',
      src: '/music/i would hate u.mp3'
    },
    {
      id: 5,
      title: 'If I Had a Gun…',
      artist: "Noel Gallagher's High Flying Birds",
      album: "Noel Gallagher's High Flying Birds",
      duration: '4:09',
      cover: 'https://i.scdn.co/image/ab67616d0000b2732c59058c29e0f2eb289b120f',
      src: '/music/If I Had A Gun.mp3'
    },
    {
      id: 6,
      title: 'Romantic Flight',
      artist: 'John Powell',
      album: 'How to Train Your Dragon',
      duration: '1:57',
      cover: 'https://cdn-images.dzcdn.net/images/cover/c2f5327b3f10d30c20f9c7313ca545ed/1900x1900-000000-80-0-0.jpg',
      src: '/music/romantic flight.mp3'
    },
    {
      id: 7,
      title: "Nothin' on You",
      artist: 'B.o.B feat. Bruno Mars',
      album: 'B.o.B Presents: The Adventures of Bobby Ray',
      duration: '4:28',
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGeTP_XwTsgj0xCj9Hzr5X8LXS-eO6v2UGBw&s',
      src: '/music/nothin on you.mp3'
    },
    {
      id: 8,
      title: 'Made in Japan',
      artist: 'Buck Owens',
      album: 'All-Time Greatest Hits, Vol. 1',
      duration: '2:45',
      cover: 'https://upload.wikimedia.org/wikipedia/en/7/7b/Made_in_Japan_%28Buck_Owens_song%29.jpg',
      src: '/music/Made In Japan.mp3'
    },
    {
      id: 9,
      title: 'Hold Me Down',
      artist: 'Daniel Caesar',
      album: 'Freudian',
      duration: '2:45',
      cover: 'https://i.scdn.co/image/ab67616d0000b2733138f891f3075c9c5d944037',
      src: '/music/Hold Me Down.mp3'
    }
  ]

  // Helper to randomly pick and start a song from the love playlist
  const playRandomSong = () => {
    const playableIndices = loveSongs
      .map((song, index) => (song.src ? index : null))
      .filter((index) => index !== null)

    if (playableIndices.length === 0) return

    const randomIndex =
      playableIndices[Math.floor(Math.random() * playableIndices.length)]
    const song = loveSongs[randomIndex]
    const audio = audioRef.current

    if (!audio || !song?.src) return

    // Update player state
    setCurrentTrack(randomIndex)
    setCurrentSong({
      title: song.title,
      artist: song.artist,
      album: song.album,
      cover: song.cover
    })
    setIsPlaying(true)

    // Start playback immediately so it counts as user-initiated
    audio.src = song.src
    audio.load()
    
    const onLoadedMetadata = () => {
      // Seek to random position in the song (between 10% and 80% of duration)
      const randomPosition = audio.duration * (0.1 + Math.random() * 0.7)
      audio.currentTime = randomPosition
      setCurrentTime(randomPosition)
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
    }
    
    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    
    audio
      .play()
      .then(() => {
        setIsPlaying(true)
      })
      .catch((err) => {
        console.error('Audio play blocked:', err)
        setIsPlaying(false)
      })
  }

  // Keep a ref for shuffle so the ended handler can read latest value
  const isShuffleRef = useRef(isShuffle)
  useEffect(() => {
    isShuffleRef.current = isShuffle
  }, [isShuffle])

  // Keep a ref for isPlaying so track-change effect can decide to auto-play
  const isPlayingRef = useRef(isPlaying)
  useEffect(() => { isPlayingRef.current = isPlaying }, [isPlaying])

  // refs for currentTrack and repeatMode for listener closures
  const currentTrackRef = useRef(currentTrack)
  useEffect(() => { currentTrackRef.current = currentTrack }, [currentTrack])
  const repeatModeRef = useRef(repeatMode)
  useEffect(() => { repeatModeRef.current = repeatMode }, [repeatMode])

  const wrappedPages = [
    { id: 0, title: 'Happy sweet seventeen!', subtitle: 'Hello, Mandy', bg: 'from-[#1ed760] via-[#1db954] to-[#169c46]' },
    { id: 1, title: 'Semoga tahun ini', subtitle: 'semakin bisa lebih better', bg: 'from-[#e91e63] via-[#9c27b0] to-[#673ab7]' },
    { id: 2, title: 'Every moment we shared', subtitle: 'became a memory I hold close to my heart', bg: 'from-[#ff6b6b] via-[#ee5a24] to-[#f39c12]' },
    { id: 3, title: 'You make ordinary days', subtitle: 'feel like the greatest adventures', bg: 'from-[#00bcd4] via-[#3f51b5] to-[#9c27b0]' },
    { id: 4, title: 'Thank you for being you', subtitle: 'for your kindness, your laugh, your everything', bg: 'from-[#8e44ad] via-[#3498db] to-[#1abc9c]' },
    { id: 5, title: 'Heres to more memories', subtitle: 'more laughter, more us. Happy birthday, my love.', bg: 'from-[#1ed760] via-[#ff6b6b] to-[#ffd93d]' }
  ]

  const playlists = [
    { id: 1, name: 'Memories', description: 'Our pictures together', cover: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c22eb6f647adc1a07b4cc3838', type: 'memories' },
    { id: 2, name: 'Our Love Playlist', description: 'Songs that remind me of you', cover: 'https://i.imgur.com/w5eP1QP.jpeg', type: 'songs' },
    { id: 3, name: 'Message', description: 'From me to you', cover: 'https://i.imgur.com/3fzYD90.png', type: 'message' },
    { id: 4, name: 'Wrapped', description: 'Your Wrapped', cover: 'https://i.imgur.com/8PbONU7.png', type: 'wrapped' }
  ]

  const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0])

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  // Effect: run when track changes — set src, load, and attach listeners
  useEffect(() => {
    const audio = audioRef.current
    const song = loveSongs[currentTrack]

    if (!audio || !song?.src) return

    // Update currentSong state when track changes
    setCurrentSong({
      title: song.title,
      artist: song.artist,
      album: song.album,
      cover: song.cover
    })

    // Reset current time when track changes
    setCurrentTime(0)

    audio.src = song.src
    audio.load()

    const onLoadedMetadata = () => {
      setDuration(audio.duration || 0)
      // If playback was active before the track change, resume playback on the newly loaded track
      if (isPlayingRef.current) {
        audio.play().catch(() => {})
      }
      // if we have a desired time (e.g., restore), don't override here
    }

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime || 0)
    }

    const onEnded = () => {
      const shuffleNow = isShuffleRef.current
      const rm = repeatModeRef.current

      if (rm === 'one') {
        audio.currentTime = 0
        audio.play().catch(() => {})
      } else if (rm === 'all') {
        if (shuffleNow) {
          const randomIndex = Math.floor(Math.random() * loveSongs.length)
          setCurrentTrack(randomIndex)
        } else {
          setCurrentTrack((prev) => (prev + 1) % loveSongs.length)
        }
      } else {
        if (currentTrackRef.current < loveSongs.length - 1) {
          if (shuffleNow) {
            const randomIndex = Math.floor(Math.random() * loveSongs.length)
            setCurrentTrack(randomIndex)
          } else {
            setCurrentTrack((prev) => (prev + 1) % loveSongs.length)
          }
        } else {
          setIsPlaying(false)
        }
      }
    }

    audio.addEventListener('loadedmetadata', onLoadedMetadata)
    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('ended', onEnded)

    return () => {
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
      audio.removeEventListener('timeupdate', onTimeUpdate)
      audio.removeEventListener('ended', onEnded)
    }
    // only re-run on track or repeatMode changes
  }, [currentTrack])

  // Effect: play/pause control separated so toggling play doesn't reload the source
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.play().catch(() => {})
    } else {
      audio.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = volume
    if (volume > 0 && isMuted) {
      setIsMuted(false)
      audioRef.current.muted = false
    }
  }, [volume])

  // Keep audio muted state in sync with audio element
  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.muted = isMuted
  }, [isMuted])


  const handleContinue = async () => {
    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()

    if (trimmedEmail === '') {
      setLoginError('Username cannot be empty')
      return
    }

    if (trimmedPassword === '') {
      setLoginError('Password cannot be empty')
      return
    }

    // Check valid usernames
    const validUsernames = [
      'mandy',
      'kih.mandy',
      'mandahoyy',
      'mendidikbud'
    ]
    
    const isValidUsername = validUsernames.some(user => {
      if (user === 'mandy') {
        // mandy is case insensitive
        return trimmedEmail.toLowerCase() === user
      } else {
        // Others must be exact match (lowercase)
        return trimmedEmail === user
      }
    })

    if (!isValidUsername) {
      setLoginError('Hayo ini siapa 👀')
      return
    }

    // Check password is exactly MANDY1901
    if (trimmedPassword !== 'MANDY1901') {
      setLoginError('Wrong Password 🔒')
      return
    }

    setLoginError('')
    setCurrentScreen('home')

    // Play a random song immediately using the user click gesture
    const playableIndices = loveSongs
      .map((song, index) => (song.src ? index : null))
      .filter((index) => index !== null)

    if (playableIndices.length === 0) return

    const randomIndex = playableIndices[Math.floor(Math.random() * playableIndices.length)]
    const song = loveSongs[randomIndex]
    const audio = audioRef.current

    if (!audio || !song?.src) return

    try {
      audio.src = song.src
      audio.load()
      await audio.play()
      setCurrentTrack(randomIndex)
      setCurrentSong({
        title: song.title,
        artist: song.artist,
        album: song.album,
        cover: song.cover
      })
      setCurrentTime(0)
      setIsPlaying(true)
    } catch (err) {
      console.error('Audio play blocked:', err)
      setIsPlaying(false)
    }
  }
  
  

  // Refs to save/restore playback when entering/exiting Wrapped
  const savedWrappedStateRef = useRef(null)

  const handlePlaylistClick = (playlist) => {
    setSelectedPlaylist(playlist)
    if (playlist.type === 'wrapped') {
      // Save current playback state so we can restore it when exiting Wrapped
      if (!savedWrappedStateRef.current) {
        savedWrappedStateRef.current = {
          track: currentTrack,
          song: currentSong,
          isPlaying: isPlaying,
          time: audioRef.current ? audioRef.current.currentTime : currentTime,
          src: audioRef.current ? audioRef.current.src : null
        }
      }

      setWrappedPage(0)
      setCurrentView(playlist.type)
      // Start playing a random song when entering wrapped
      setTimeout(() => {
        if (!isPlaying) {
          playRandomSong()
        }
      }, 0)
      return
    }
    setCurrentView(playlist.type)
  }

  // When wrappedPage changes while in Wrapped view, keep the same song playing
  useEffect(() => {
    if (currentView === 'wrapped' && !isPlaying) {
      // Only start playing if nothing is playing yet
      playRandomSong()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentView])

  // Restore previous playback when leaving Wrapped
  useEffect(() => {
    if (currentView !== 'wrapped' && savedWrappedStateRef.current) {
      const prev = savedWrappedStateRef.current
      const audio = audioRef.current

      if (!audio) return

      // Restore track and song metadata
      const prevTrack = prev.track
      const prevSong = prev.song
      setCurrentTrack(prevTrack)
      setCurrentSong(prevSong)

      // Determine source to restore
      const srcToRestore = prev.src || (loveSongs[prevTrack] && loveSongs[prevTrack].src)

      if (srcToRestore) {
        audio.src = srcToRestore
        audio.load()

        // Set time after metadata is loaded
        const onLoaded = () => {
          try {
            audio.currentTime = prev.time || 0
          } catch (e) {}
          if (prev.isPlaying) {
            audio.play().catch(() => {})
            setIsPlaying(true)
          } else {
            audio.pause()
            setIsPlaying(false)
          }
          audio.removeEventListener('loadedmetadata', onLoaded)
        }

        audio.addEventListener('loadedmetadata', onLoaded)
      } else {
        // fallback: just restore playing flag
        if (prev.isPlaying) {
          audio.play().catch(() => {})
          setIsPlaying(true)
        } else {
          audio.pause()
          setIsPlaying(false)
        }
      }

      // clear saved state
      savedWrappedStateRef.current = null
    }
  }, [currentView])

  // If the view becomes 'wrapped' by any other means and nothing is playing, try to play a random song
  useEffect(() => {
    if (currentView === 'wrapped' && !isPlaying) {
      playRandomSong()
    }
  }, [currentView, isPlaying])

  const handleSongClick = (song, index) => {
    if (!song.src) return
    setCurrentTrack(index)
    setCurrentSong({
      title: song.title,
      artist: song.artist,
      album: song.album,
      cover: song.cover
    })
    setIsPlaying(true)
  }
  
  

  const handleBackToHome = () => {
    setCurrentView('home')
  }

  const togglePlay = async () => {
    try {
      if (!audioRef.current) return
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        await audioRef.current.play() // IMPORTANT
      }
      setIsPlaying(!isPlaying)
    } catch (err) {
      console.error("Audio play blocked:", err)
    }
  }
  

  const handleTimeChange = (time) => {
    audioRef.current.currentTime = time
    setCurrentTime(time)
  }

  const handleVolumeChange = (v) => {
    // update previous volume when user manually changes it
    if (v > 0) prevVolumeRef.current = v
    audioRef.current.volume = v
    setVolume(v)
    if (v > 0 && isMuted) {
      setIsMuted(false)
      audioRef.current.muted = false
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (isMuted || volume === 0) {
      const restored = prevVolumeRef.current || 1
      setVolume(restored)
      audio.volume = restored
      setIsMuted(false)
      audio.muted = false
    } else {
      prevVolumeRef.current = volume
      setVolume(0)
      audio.volume = 0
      setIsMuted(true)
      audio.muted = true
    }
  }

  const nextTrack = () => {
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * loveSongs.length)
      setCurrentTrack(randomIndex)
    } else {
      setCurrentTrack((prev) => (prev + 1) % loveSongs.length)
    }
  }

  const prevTrack = () => {
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * loveSongs.length)
      setCurrentTrack(randomIndex)
    } else {
      setCurrentTrack((prev) =>
        prev === 0 ? loveSongs.length - 1 : prev - 1
      )
    }
  }

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle)
  }

  const toggleRepeat = () => {
    if (repeatMode === 'off') {
      setRepeatMode('all')
    } else if (repeatMode === 'all') {
      setRepeatMode('one')
    } else {
      setRepeatMode('off')
    }
  }

  const nextWrappedPage = () => {
    if (wrappedPage < wrappedPages.length - 1) {
      setWrappedPage(wrappedPage + 1)
      playRandomSong()
    }
  }

  const prevWrappedPage = () => {
    if (wrappedPage > 0) {
      setWrappedPage(wrappedPage - 1)
      playRandomSong()
    }
  }

  // LOGIN SCREEN
  if (currentScreen === 'login') {
    return (
      <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center px-4">
        <div className="mb-8">
          <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>
        <h1 className="text-5xl font-bold text-white mb-10 text-center">Welcome back</h1>
        <div className="w-full max-w-[324px]">
          <div className="mb-4">
            <label className="block text-sm font-semibold text-white mb-2">Username</label>
            <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="w-full h-12 px-4 bg-[#121212] border border-[#727272] rounded-[4px] text-white placeholder-[#a7a7a7] focus:outline-none focus:border-white transition-colors"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold text-white mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-12 px-4 bg-[#121212] border border-[#727272] rounded-[4px] text-white placeholder-[#a7a7a7] focus:outline-none focus:border-white transition-colors"
            />
            {loginError && (
              <p className="text-red-500 text-sm mt-2 font-medium">
                {loginError}
              </p>
            )}
          </div>
          <button
            onClick={handleContinue}
            className="w-full h-12 mt-4 bg-[#1ed760] hover:bg-[#1fdf64] hover:scale-[1.04] text-black font-bold rounded-full transition-all"
          >
            Continue
          </button>
          <div className="h-8"></div>
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#a7a7a7]">Don't have an account?</p>
                    <button
          onClick={() => window.open('https://wa.me/6281210755219', '_blank')}
          className="text-white font-semibold underline hover:text-[#1ed760] transition-colors"
        >
          Ask your boyfriend
        </button>
          </div>
        </div>
      </div>
    )
  }

  // WRAPPED FULLSCREEN EXPERIENCE
  if (currentScreen === 'home' && currentView === 'wrapped') {
    const page = wrappedPages[wrappedPage]
    return (
      <div className={`h-screen bg-gradient-to-br ${page.bg} flex flex-col items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        
        <button
          onClick={handleBackToHome}
          className="absolute top-6 left-6 z-20 w-10 h-10 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="relative z-10 text-center px-8 max-w-2xl">
          <h1 className="text-6xl font-black text-white mb-6 leading-tight animate-pulse">
            {page.title}
          </h1>
          <p className="text-2xl text-white/90 font-medium">
            {page.subtitle}
          </p>
        </div>

        <div className="absolute bottom-12 flex items-center gap-4 z-20">
          <button
            onClick={prevWrappedPage}
            disabled={wrappedPage === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${wrappedPage === 0 ? 'bg-white/10 text-white/30' : 'bg-white/20 hover:bg-white/30 text-white'}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-2">
            {wrappedPages.map((_, idx) => (
              <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === wrappedPage ? 'bg-white w-6' : 'bg-white/40'}`}></div>
            ))}
          </div>
          
          <button
            onClick={nextWrappedPage}
            disabled={wrappedPage === wrappedPages.length - 1}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${wrappedPage === wrappedPages.length - 1 ? 'bg-white/10 text-white/30' : 'bg-white/20 hover:bg-white/30 text-white'}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {wrappedPage === wrappedPages.length - 1 && (
          <button
            onClick={handleBackToHome}
            className="absolute bottom-32 bg-white text-black font-bold px-8 py-3 rounded-full hover:scale-105 transition-transform z-20"
          >
            Back to Home
          </button>
        )}
      </div>
    )
  }

  // MEMORIES GALLERY
  if (currentScreen === 'home' && currentView === 'memories') {
    return (
      <div className="h-screen bg-[#121212] flex flex-col overflow-hidden">
        {/* Lightbox */}
        {lightboxImage && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8" onClick={() => setLightboxImage(null)}>
            <button className="absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <X className="w-5 h-5 text-white" />
            </button>
            <img src={lightboxImage.src} alt={lightboxImage.caption} className="max-w-full max-h-full object-contain rounded-lg" />
            <p className="absolute bottom-8 text-white text-xl font-medium">{lightboxImage.caption}</p>
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          <div className="bg-gradient-to-b from-[#534340] to-[#121212] pb-8">
            <div className="p-6">
              <button onClick={handleBackToHome} className="flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
                <ChevronLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
              
              <div className="flex items-end gap-6 mb-8">
                <img src={playlists[0].cover} alt="Memories" className="w-56 h-56 object-cover rounded-lg shadow-2xl" />
                <div>
                  <p className="text-white/70 text-sm font-medium mb-2">PLAYLIST</p>
                  <h1 className="text-7xl font-black text-white mb-4">Memories</h1>
                  <p className="text-white/70">Our pictures together • {memories.length} photos</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-3 gap-4">
              {memories.map((memory) => (
                <div
                  key={memory.id}
                  onClick={() => setLightboxImage(memory)}
                  className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg"
                >
                  <img src={memory.src} alt={memory.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                    <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">{memory.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // OUR LOVE PLAYLIST - SONGS
  if (currentScreen === 'home' && currentView === 'songs') {
    return (
      <div className="h-screen bg-[#121212] flex flex-col overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <div className="bg-gradient-to-b from-[#5038a0] to-[#121212] pb-8">
              <div className="p-6">
                <button onClick={handleBackToHome} className="flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                  <span>Back</span>
                </button>
                
                <div className="flex items-end gap-6 mb-8">
                  <img src={playlists[1].cover} alt="Our Love Playlist" className="w-56 h-56 object-cover rounded-lg shadow-2xl" />
                  <div>
                    <p className="text-white/70 text-sm font-medium mb-2">PLAYLIST</p>
                    <h1 className="text-6xl font-black text-white mb-4">Our Love Playlist</h1>
                    <p className="text-white/70 mb-4">Songs that remind me of you</p>
                    <p className="text-white/50 text-sm">{loveSongs.length} songs</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <button className="w-14 h-14 bg-[#1ed760] rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 text-black fill-black ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <div className="px-6">
              <div className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 text-[#b3b3b3] text-sm border-b border-[#282828] mb-2">
                <span>#</span>
                <span>TITLE</span>
                <span>ALBUM</span>
                <Clock className="w-4 h-4 ml-auto" />
              </div>
              
              {loveSongs.map((song, index) => (
                <div
                  key={song.id}
                  onClick={() => handleSongClick(song, index)}
                  className="grid grid-cols-[16px_4fr_3fr_1fr] gap-4 px-4 py-2 rounded-md hover:bg-white/10 cursor-pointer group transition-colors items-center"
                >
                  <span className="text-[#b3b3b3] group-hover:hidden">{index + 1}</span>
                  <Play className="w-4 h-4 text-white hidden group-hover:block" />
                  <div className="flex items-center gap-3">
                    <img src={song.cover} alt={song.title} className="w-10 h-10 rounded object-cover" />
                    <div>
                      <p className="text-white font-medium">{song.title}</p>
                      <p className="text-[#b3b3b3] text-sm">{song.artist}</p>
                    </div>
                  </div>
                  <span className="text-[#b3b3b3] text-sm">{song.album}</span>
                  <span className="text-[#b3b3b3] text-sm text-right">{song.duration}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-[320px] bg-[#121212] border-l border-[#282828] p-4 shrink-0">
            <div className="mb-4">
              <h3 className="text-white font-bold">{selectedPlaylist?.name || 'Now Playing'}</h3>
            </div>
            <img src={currentSong.cover} alt={currentSong.album} className="w-full aspect-square object-cover rounded-lg shadow-2xl mb-4" />
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-white font-bold text-lg">{currentSong.title}</h4>
                <p className="text-[#b3b3b3]">{currentSong.artist}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Player */}
        <div className="h-[90px] bg-black border-t border-[#282828] px-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 w-[30%]">
            <img src={currentSong.cover} alt={currentSong.album} className="w-14 h-14 rounded object-cover" />
            <div>
              <p className="text-white text-sm font-medium">{currentSong.title}</p>
              <p className="text-[#b3b3b3] text-xs">{currentSong.artist}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 w-[40%]">
            <div className="flex items-center gap-6">
              <button onClick={toggleShuffle} className="cursor-pointer">
                <Shuffle className={`w-4 h-4 ${isShuffle ? 'text-[#1ed760]' : 'text-[#b3b3b3]'} hover:text-white transition-colors`} />
              </button>
              <button onClick={prevTrack} className="cursor-pointer">
                <SkipBack className="w-5 h-5 text-[#b3b3b3] hover:text-white fill-current" />
              </button>
              <button onClick={togglePlay} className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                {isPlaying ? <Pause className="w-4 h-4 text-black fill-black" /> : <Play className="w-4 h-4 text-black fill-black ml-0.5" />}
              </button>
              <button onClick={nextTrack} className="cursor-pointer">
                <SkipForward className="w-5 h-5 text-[#b3b3b3] hover:text-white cursor-pointer fill-current" />
              </button>
              <button onClick={toggleRepeat} className="cursor-pointer">
                <Repeat className={`w-4 h-4 ${repeatMode !== 'off' ? 'text-[#1ed760]' : 'text-[#b3b3b3]'} hover:text-white transition-colors`} />
              </button>
            </div>
            <div className="flex items-center gap-2 w-full">
              <span className="text-[#b3b3b3] text-xs w-10 text-right">{formatTime(currentTime)}</span>
              <div 
                className="flex-1 h-1 bg-[#4d4d4d] rounded-full cursor-pointer group relative"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
                  const newTime = percent * (duration || 0)
                  if (duration) {
                    handleTimeChange(newTime)
                  }
                }}
              >
                <div 
                  className="h-full bg-white rounded-full group-hover:bg-[#1ed760] transition-colors" 
                  style={{ width: `${duration && duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                ></div>
              </div>
              <span className="text-[#b3b3b3] text-xs w-10">{formatTime(duration)}</span>
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 w-[30%]">
            {(isMuted || volume === 0) ? (
                <VolumeX onClick={toggleMute} className="w-4 h-4 text-[#b3b3b3] cursor-pointer hover:text-white" />
              ) : volume < 0.33 ? (
                <Volume className="w-4 h-4 text-[#b3b3b3] cursor-pointer hover:text-white" onClick={toggleMute} />
              ) : volume < 0.66 ? (
                <Volume1 className="w-4 h-4 text-[#b3b3b3] cursor-pointer hover:text-white" onClick={toggleMute} />
              ) : (
                <Volume2 className="w-4 h-4 text-[#b3b3b3] cursor-pointer hover:text-white" onClick={toggleMute} />
              )}
            <div
              className="w-24 h-1.5 bg-[#2f2f2f] rounded-full cursor-pointer relative overflow-hidden"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
                handleVolumeChange(percent)
              }}
            >
              <div
                className="h-full bg-white rounded-full transition-colors"
                style={{ width: `${volume * 100}%` }}
              ></div>
              <div
                className="absolute top-1/2"
                style={{ left: `${volume * 100}%`, transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-3 h-3 bg-white rounded-full shadow pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // MESSAGE PAGE
  if (currentScreen === 'home' && currentView === 'message') {
    return (
      <div className="h-screen bg-[#121212] flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto">
          <div className="bg-gradient-to-b from-[#8b5a5a] to-[#121212] pb-8">
            <div className="p-6">
              <button onClick={handleBackToHome} className="flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
                <ChevronLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
              
              <div className="flex items-end gap-6 mb-8">
      <div className="w-56 h-56 rounded-lg shadow-2xl overflow-hidden">
        <img
          src="https://i.imgur.com/3fzYD90.png"
          alt="playlist cover"
          className="w-full h-full object-cover"
        />
      </div>
                <div>
                  <p className="text-white/70 text-sm font-medium mb-2">ALBUM</p>
                  <h1 className="text-7xl font-black text-white mb-4">Message</h1>
                  <p className="text-white/70">dar</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto px-6 py-12">
            <div className="bg-[#181818] rounded-2xl p-8 shadow-xl">
              
              
              <div className="space-y-6 text-[#b3b3b3] leading-relaxed text-lg">
                <p className="text-white font-medium text-xl">dear mandy,</p>
                
                <p>
                  happy birthday yaaa princess! moga tahun ini bisa jadi tahun yang lebih baik bagi u dari tahun" sebelumnya yaa. moga u selalu sehat, makin cantik, makin sukses, makin bisa banggain ortu, and always jadi mandy yang happy yaa.
                </p>
                
                <p>
                  jujur i planning bikin website ini kayak seminggu yang lalu, and i really speedrun it biar bisa jadi surprise gitu hehe. i hope u like it! i made this to show how much i love u and appreciate u. setiap moment bareng u berharga banget buat i, and i cherish every single memory we made together.
                </p>
                
                <p>
                  i wanna say sorry kalo selama kita kenal i pernah bikin u sedih, kesel, marah ato semacamnya. asal u tau if i never mean to hurt u. i always try my best to be a better person for u, and i hope u can forgive me for my mistakes. thank u for being so patient and understanding sama i.
                </p>

                <p>
                  once again, happy birthday mandy! sisa messagenya mugnkin u udah liat di wa wkwk. fly higher, i'll be your goddamn rocket 🤘
                </p>
                
                <p className="text-white font-medium text-xl pt-4">
                  the best,<br/>
                  dar 🤍
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // HOME SCREEN
  return (
    <div className="h-screen bg-[#121212] flex flex-col overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        {/* SIDEBAR */}
        <div className="w-[280px] bg-black flex flex-col p-2 gap-2 shrink-0">
          {/* Navigation */}
          <div className="bg-[#121212] rounded-lg p-4">
            <div className="flex items-center gap-4 px-3 py-2 text-white hover:text-white cursor-pointer transition-colors group">
              <Home className="w-6 h-6" />
              <span className="font-semibold">Home</span>
            </div>
          </div>

          {/* Library */}
          <div className="bg-[#121212] rounded-lg p-4 flex-1 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3 text-[#b3b3b3] hover:text-white cursor-pointer transition-colors">
                <Library className="w-6 h-6" />
                <span className="font-semibold">Your Library</span>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-2">
              {playlists.map((playlist) => (
                <div
                  key={playlist.id}
                  onClick={() => handlePlaylistClick(playlist)}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-[#1a1a1a] cursor-pointer transition-colors group"
                >
                  <img src={playlist.cover} alt={playlist.name} className="w-12 h-12 rounded object-cover" />
                  <div className="overflow-hidden">
                    <p className="text-white font-medium truncate">{playlist.name}</p>
                    <p className="text-[#b3b3b3] text-sm truncate">Playlist</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 overflow-y-auto">
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#121212] min-h-full">
            {/* Top Bar */}
            <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-[#121212]/80 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors">
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button className="w-8 h-8 bg-black/70 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors">
                  <ChevronRight className="w-5 h-5 text-[#b3b3b3]" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#1ed760] rounded-full flex items-center justify-center text-black font-bold text-sm cursor-pointer hover:scale-105 transition-transform">
                  M
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* 2025 WRAPPED BANNER */}
              <div className="mb-8">
                <div
                  onClick={() => handlePlaylistClick(playlists[3])}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#fadadd]"></div>
                  <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.25),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(0,0,0,0.25),transparent_45%)]"></div>
                  <div className="relative p-8">
                    <div className="flex items-start justify-between gap-6">
                      <div>
                        <p className="text-black/80 font-semibold text-sm mt-3">BIRTHDAY EDITION</p>
                        <h2 className="text-6xl font-black text-black tracking-tight leading-[0.92] mt-2">
                          MANDY'S<br />WRAPPED
                        </h2>
                        <p className="text-black/80 mt-4 font-medium">
                          Tap to view your moments
                        </p>
                      </div>

                      <div className="shrink-0">
                        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform">
                        <Play className="w-6 h-6 text-[#e75480] fill-[#e75480] ml-0.5" />
                        </div>
         </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* MADE FOR YOU */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white cursor-pointer">Made For You</h2>
                </div>
                <div className="grid grid-cols-4 gap-6">
                  {playlists.map((playlist) => (
                    <div
                      key={playlist.id}
                      onClick={() => handlePlaylistClick(playlist)}
                      className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] cursor-pointer transition-all duration-300 group"
                    >
                      <div className="relative mb-4">
                        <img src={playlist.cover} alt={playlist.name} className="w-full aspect-square object-cover rounded-md shadow-lg" />
                        <button className="absolute bottom-2 right-2 w-12 h-12 bg-[#1ed760] rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105 hover:bg-[#1fdf64]">
                          <Play className="w-6 h-6 text-black fill-black ml-1" />
                        </button>
                      </div>
                      <h3 className="text-white font-bold mb-1 truncate">{playlist.name}</h3>
                      <p className="text-[#b3b3b3] text-sm line-clamp-2">{playlist.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL - NOW PLAYING */}
        <div className="w-[320px] bg-[#121212] border-l border-[#282828] p-4 shrink-0 overflow-y-auto">
        <div className="sticky top-0">
            <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-bold">Our Love Playlist</h3>
            </div>
            
            <div className="mb-6">
              <img src={currentSong.cover} alt={currentSong.album} className="w-full aspect-square object-cover rounded-lg shadow-2xl" />
            </div>
            
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-bold text-lg">{currentSong.title}</h4>
                  <p className="text-[#b3b3b3]">{currentSong.artist}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 rounded hover:bg-[#1a1a1a] cursor-pointer transition-colors">
                
                <div className="flex-1 min-w-0">
                  
                </div>
              </div>
              <div className="flex items-center gap-3 p-2 rounded hover:bg-[#1a1a1a] cursor-pointer transition-colors">
                
                <div className="flex-1 min-w-0">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PLAYER */}
      <div className="h-[90px] bg-black border-t border-[#282828] px-4 flex items-center justify-between shrink-0">
        {/* Song Info */}
        <div className="flex items-center gap-4 w-[30%] min-w-[180px]">
          <img src={currentSong.cover} alt={currentSong.album} className="w-14 h-14 rounded object-cover" />
          <div className="min-w-0">
            <p className="text-white text-sm font-medium truncate hover:underline cursor-pointer">{currentSong.title}</p>
            <p className="text-[#b3b3b3] text-xs truncate hover:underline cursor-pointer">{currentSong.artist}</p>
          </div>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 w-[40%] max-w-[722px]">
          <div className="flex items-center gap-6">
            <button onClick={toggleShuffle} className="cursor-pointer">
              <Shuffle className={`w-4 h-4 ${isShuffle ? 'text-[#1ed760]' : 'text-[#b3b3b3]'} hover:text-white transition-colors`} />
            </button>
            <button onClick={prevTrack} className="cursor-pointer">
              <SkipBack className="w-5 h-5 text-[#b3b3b3] hover:text-white fill-current transition-colors" />
            </button>
            <button
              onClick={togglePlay}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-black fill-black" />
              ) : (
                <Play className="w-4 h-4 text-black fill-black ml-0.5" />
              )}
            </button>
            <button onClick={nextTrack} className="cursor-pointer">
              <SkipForward className="w-5 h-5 text-[#b3b3b3] hover:text-white fill-current transition-colors" />
            </button>
            <button onClick={toggleRepeat} className="cursor-pointer">
              <Repeat className={`w-4 h-4 ${repeatMode !== 'off' ? 'text-[#1ed760]' : 'text-[#b3b3b3]'} hover:text-white transition-colors`} />
            </button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-[#b3b3b3] text-xs w-10 text-right">{formatTime(currentTime)}</span>
            <div 
              className="flex-1 h-1 bg-[#4d4d4d] rounded-full group cursor-pointer relative"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
                const newTime = percent * (duration || 0)
                if (duration) {
                  handleTimeChange(newTime)
                }
              }}
            >
              <div 
                className="h-full bg-white rounded-full group-hover:bg-[#1ed760] transition-colors relative" 
                style={{
                  width: `${duration && duration > 0 ? (currentTime / duration) * 100 : 0}%`
                }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <span className="text-[#b3b3b3] text-xs w-10">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center justify-end gap-3 w-[30%] min-w-[180px]">
          {(isMuted || volume === 0) ? (
              <VolumeX onClick={toggleMute} className="w-4 h-4 text-[#b3b3b3] hover:text-white cursor-pointer transition-colors" />
            ) : volume < 0.33 ? (
              <Volume onClick={toggleMute} className="w-4 h-4 text-[#b3b3b3] hover:text-white cursor-pointer transition-colors" />
            ) : volume < 0.66 ? (
              <Volume1 onClick={toggleMute} className="w-4 h-4 text-[#b3b3b3] hover:text-white cursor-pointer transition-colors" />
            ) : (
              <Volume2 onClick={toggleMute} className="w-4 h-4 text-[#b3b3b3] hover:text-white cursor-pointer transition-colors" />
            )}
          <div
            className="w-24 h-1.5 bg-[#2f2f2f] rounded-full cursor-pointer relative overflow-hidden"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect()
              const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width))
              handleVolumeChange(percent)
            }}
          >
            <div
              className="h-full bg-white rounded-full transition-colors"
              style={{ width: `${volume * 100}%` }}
            ></div>
            <div
              className="absolute top-1/2"
              style={{ left: `${volume * 100}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-3 h-3 bg-white rounded-full shadow pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
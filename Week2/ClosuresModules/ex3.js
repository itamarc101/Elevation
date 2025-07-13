const SongsManager = function () {
    const songs = {}
  
    const YT_BASE_URL = "https://www.youtube.com/watch?v="
  
    const addSong = function (name, url) {
      const id = url.split("v=")[1]
      songs[name] = id
    }
  
    const getSong = function (name) {
      console.log(YT_BASE_URL + songs[name])
    }
  
    return {
      addSong: addSong,
      getSong: getSong
    }
  }
  
  // שימוש
  const songsManager = SongsManager()
  songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
  songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
  songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
  
  songsManager.getSong("sax") // https://www.youtube.com/watch?v=3JZ4pnNtyxQ
  
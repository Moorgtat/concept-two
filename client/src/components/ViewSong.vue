<template>
    <div>
        <h2>It's ViewSong!</h2>
        <p>{{ song.title }}</p>
        <p>{{ song.artist }}</p>
        <p>{{ song.genre }}</p>
        <p>{{ song.album }}</p>
        <img :src="song.albumImageUrl" style="width: 500px; height: 400px"/>
        <youtube :video-id="song.youtubeId"></youtube>
        <p>{{ song.lyrics }}</p>
        <p>{{ song.tab }}</p>
    </div>
</template>

<script>
import SongService from '@/services/SongService'

export default {
  name: 'ViewSong',
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
  }
}
</script>

<style scoped>

</style>

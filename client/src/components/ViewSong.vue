<template>
    <div>
        <h2>It's ViewSong!</h2>
        <RouterLink :to="{name: 'EditSong', params () { return {songId: song.id}}}">
            <button class="btn-two" >Edit</button>
        </RouterLink>
        <button v-if="$store.state.isUserLoggedIn && !isBookmarked" class="btn-two" @click="bookMe">book</button>
        <button v-if="$store.state.isUserLoggedIn && isBookmarked" class="btn-two" @click="unbookMe">unbo</button>
        <p>{{ song.title }}</p>
        <p>{{ song.artist }}</p>
        <p>{{ song.genre }}</p>
        <p>{{ song.album }}</p>
        <img :src="song.albumImageUrl" style="width: 500px; height: 400px" alt="Image de l'album"/>
        <youtube :video-id="song.youtubeId"></youtube>
        <p>{{ song.lyrics }}</p>
        <p>{{ song.tab }}</p>
    </div>
</template>

<script>
import SongService from '@/services/SongService'
import BookmarksService from '@/services/BookmarksService'
export default {
  name: 'ViewSong',
  data () {
    return {
      song: {},
      isBookmarked: false
    }
  },
  methods: {
    async bookMe () {
      try {
        await BookmarksService.post({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      } catch (error) {
        window.console.log(error)
      }
    },
    async unbookMe () {
      try {
        await BookmarksService.delete({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })
      } catch (error) {
        window.console.log(error)
      }
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    if (!this.$store.state.isUserLoggedIn) {
      return
    }
    try {
      const bookmark = (await BookmarksService.index({
        songId: this.song.id,
        userId: this.$store.state.user.id
      })).data
      this.isBookmarked = !!bookmark
    } catch (error) {
      window.console.log(error)
    }
  }
}
</script>

<style scoped>

</style>

<template>
    <div class="viewsong">
        <div>
        <button v-if="$store.state.isUserLoggedIn && !bookmark" class="btn-two" @click="bookMe">book</button>
        <button v-if="$store.state.isUserLoggedIn && bookmark" class="btn-two" @click="unbookMe">unbo</button>
        <RouterLink :to="{name: 'EditSong', params () { return {songId: song.id}}}">
            <button class="btn-two">Edit</button>
        </RouterLink>
        </div>
        <div class="head">
            <div class="infos-container">
                <div>
                    <div>Titre :</div>
                    <div>{{ song.title }}</div>
                </div>
                <div>
                    <div>Artiste :</div>
                    <div>{{ song.artist }}</div>
                </div>
                <div>
                    <div>Genre :</div>
                    <div>{{ song.genre }}</div>
                </div>
                <div>
                <div>Album :</div>
                <div>{{ song.album }}</div>
                </div>
            </div>
        <div class="image-container">
            <img class="img-spec" :src="song.albumImageUrl" style="height: 300px" alt="Image de l'album"/>
        </div>
    </div>
    <youtube :video-id="song.youtubeId" :player-vars="{ autoplay: 1 }" player-width="80%"></youtube>
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
      bookmark: null
    }
  },
  methods: {
    async bookMe () {
      try {
        this.bookmark = (await BookmarksService.post({
          songId: this.song.id
        })).data
      } catch (error) {
        window.console.log(error)
      }
    },
    async unbookMe () {
      try {
        await BookmarksService.delete({
          songId: this.song.id
        })
        this.bookmark = null
      } catch (error) {
        window.console.log(error)
      }
    }
  },
  watch: {
    async song () {
      if (!this.$store.state.isUserLoggedIn) {
        return
      }
      try {
        this.bookmark = (await BookmarksService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
      } catch (error) {
        window.console.log(error)
      }
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
  }
}
</script>

<style scoped>
    .viewsong {
        width: 100%;
        padding-bottom: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .head {
        width: 80%;
        min-height: 300px;
        margin: 20px 10%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .infos-container {
        padding: 10px;
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-evenly;
    }

    .image-container {
        flex: 1;
    }

    .img-spec {
        height: 100%;
    }
</style>

<template>
    <div class="viewsong">
        <button v-if="$store.state.isUserLoggedIn && !bookmark" class="btn-two" @click="bookMe">book</button>
        <button v-if="$store.state.isUserLoggedIn && bookmark" class="btn-two" @click="unbookMe">unbo</button>
        <RouterLink :to="{name: 'EditSong', params () { return {songId: song.id}}}">
            <button class="btn-two">Edit</button>
        </RouterLink>
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
                <div>Titre :</div>
                <div>{{ song.album }}</div>
                </div>
        </div>
        <div class="image-container">
            <img :src="song.albumImageUrl" style="width: 100%; height: 100%" alt="Image de l'album"/>
        </div>
    </div>
    <youtube :video-id="song.youtubeId" :player-vars="{ autoplay: 1 }" player-width="80%"
             player-height="400px"></youtube>
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
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data
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
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .head {
        width: 80%;
        margin: 0 10%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        border: solid 1px black;
    }

    .infos-container {
        width: 30%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        border: solid 1px red;
    }

    .image-container {
        width: 70%;
        border: solid 1px blue;
    }
</style>

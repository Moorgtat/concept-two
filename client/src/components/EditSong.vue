<template>
<div class="editSong">
    <h2>This is ViewSong!</h2>
    <Panel>
        <label>Titre : </label>
        <br>
        <input type="text" name="title" v-model="song.title" placeholder="title"/>
        <br>
        <label>Artist : </label>
        <br>
        <input type="text" name="artist" v-model="song.artist" placeholder="artist"/>
        <br>
        <label>Genre : </label>
        <br>
        <input type="text" name="genre" v-model="song.genre" placeholder="genre"/>
        <br>
        <label>Album : </label>
        <br>
        <input type="text" name="album" v-model="song.album" placeholder="album"/>
        <br>
        <label>AlbumImageUrl : </label>
        <br>
        <input type="text" name="albumImageUrl" v-model="song.albumImageUrl" placeholder="albumImageUrl"/>
        <br>
        <label>Youtube Id : </label>
        <br>
        <input type="text" name="youtubeId" v-model="song.youtubeId" placeholder="youtubeId"/>
        <br>
        <label>Lyrics : </label>
        <br>
        <input type="text" name="lyrics" v-model="song.lyrics" placeholder="lyrics"/>
        <br>
        <label>Tab : </label>
        <br>
        <input type="text" name="tab" v-model="song.tab" placeholder="tab"/>
        <br>
        <button class="btn-one" @click="editSong">Save</button>
    </Panel>
</div>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'
export default {
  name: 'EditSong',
  components: {
    Panel
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      }
    }
  },
  methods: {
    async editSong () {
      try {
        await SongService.put(this.song)
        await this.$router.push({
          name: 'ViewSong',
          params: {
            songId: this.song.id
          }
        })
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
.editSong{
    width: 450px;
}
</style>

<template>
<div class="createSong">
    <h2>Add a Song !</h2>
    <Panel>
        <input type="text" name="title" v-model="song.title" placeholder="title"/>
        <br>
        <input type="text" name="artist" v-model="song.artist" placeholder="artist"/>
        <br>
        <input type="text" name="genre" v-model="song.genre" placeholder="genre"/>
        <br>
        <input type="text" name="album" v-model="song.album" placeholder="album"/>
        <br>
        <input type="text" name="albumImageUrl" v-model="song.albumImageUrl" placeholder="albumImageUrl"/>
        <br>
        <input type="text" name="youtubeId" v-model="song.youtubeId" placeholder="youtubeId"/>
        <br>
        <input type="text" name="lyrics" v-model="song.lyrics" placeholder="lyrics"/>
        <br>
        <input type="text" name="tab" v-model="song.tab" placeholder="tab"/>
        <br>
        <div v-html="error"></div>
        <button class="btn-one" @click="createSong">Create</button>
    </Panel>
</div>
</template>

<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'
export default {
  name: 'CreateSong',
  components: {
    Panel
  },
  data () {
    return {
      error: null,
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
    async createSong () {
      try {
        await SongService.post(this.song)
        await this.$router.push('/')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.createSong{
    width: 450px;
}
</style>

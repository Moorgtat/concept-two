<template>
  <div class="home">
    <h2>This is the home page</h2>
    <Panel title="Songs">
      <div v-for="song in songs" :key="song.id">
        {{song.title}} -
        {{song.artist}} -
        {{song.album}}
      </div>
    </Panel>
    <CreateSong/>
  </div>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '../components/Panel'
import CreateSong from '@/components/CreateSong'
export default {
  name: 'Home',
  components: {
    Panel,
    CreateSong
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongService.index()).data
  }
}
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
</style>

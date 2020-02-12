<template>
  <div class="home">
    <h2>This is the home page</h2>
    <Panel title="Songs">
      <div v-for="song in songs" :key="song.id">
        {{song.title}} -
        {{song.artist}} -
        {{song.album}}
        <RouterLink :to="{name: 'song', params: {songId: song.id}}">
        <button class="btn-two" >view</button>
        </RouterLink>
      </div>
      <RouterLink to="/create">
      <button class="btn-one" style="font-size: 18px">ADD</button>
      </RouterLink>
    </Panel>
  </div>
</template>

<script>
import SongService from '@/services/SongService'
import Panel from '../components/Panel'
export default {
  name: 'Home',
  components: {
    Panel
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
    min-width: 450px;
  }
</style>

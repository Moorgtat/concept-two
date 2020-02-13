<template>
  <div class="songs">
    <h2>This is the home page</h2>
    <label>Search : </label>
      <br>
    <input v-model="search" placeholder="Search Songs by title or artist..."/>
    <Panel title="Songs">
      <div v-for="song in songs" :key="song.id">
        {{song.title}} -
        {{song.artist}} -
        {{song.album}}
        <RouterLink :to="{name: 'ViewSong', params: {songId: song.id}}">
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
  name: 'songs',
  components: {
    Panel
  },
  data () {
    return {
      songs: null,
      search: null
    }
  },
  watch: {
    search (value) {
      const route = {
        name: 'Songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    },
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongService.index(value)).data
      }
    }
  }
}
</script>

<style>
  .songs {
    min-width: 450px;
  }
</style>

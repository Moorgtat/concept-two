<template>
    <div class="songs">
        <div v-if="$store.state.isUserLoggedIn" style="margin: 10px">
            <div style="font-size: 18px"><strong>My Playlist</strong></div>
            <div v-if="Object.keys(bookmarks).length === 0">Your playlist is empty !</div>
            <div v-for="bookmark in bookmarks" :key="bookmark.id">
                {{bookmark.title}} -
                {{bookmark.artist}}
                <RouterLink :to="{name: 'ViewSong', params: {songId: bookmark.id}}">
                    <button class="btn-two">play</button>
                </RouterLink>
            </div>
        </div>
        <div class="search-io"><label style="margin: 0; padding: 0">Search :</label>
        <input v-model="search" placeholder="Search songs by title or artist..." style="margin: 3px"/>
        <RouterLink to="/create">
            <button class="btn-two" style="margin: 0">add</button>
        </RouterLink>
        </div>
        <Panel>
            <div v-if="Object.keys(songs).length === 0">No songs available !</div>
            <div class="cd-container">
                <div v-for="song in songs" :key="song.id" class="cd clarity">
                    <RouterLink :to="{name: 'ViewSong', params: {songId: song.id}}">
                        <img :src="song.albumImageUrl" style=" height: 220px; width: 240px" alt="Image de l'album"/>
                        <div>{{song.title}}</div>
                        <div>{{song.artist}}</div>
                        <div>{{song.album}}</div>
                    </RouterLink>
                    <div>
                    </div>
                </div>
            </div>
        </Panel>
    </div>
</template>

<script>
import SongService from '@/services/SongService'
import BookmarksService from '@/services/BookmarksService'
import _ from 'lodash'
import Panel from '../components/Panel'
export default {
  name: 'songs',
  components: {
    Panel
  },
  data () {
    return {
      songs: {},
      search: null,
      bookmarks: {}
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'Songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongService.index(value)).data
      }
    }
  },
  async mounted () {
    if (!this.$store.state.isUserLoggedIn) {
      return
    }
    try {
      this.bookmarks = (await BookmarksService.indexAll({
        userId: this.$store.state.user.id
      })).data
    } catch (error) {
      window.console.log(error)
    }
  }
}
</script>

<style>
  .songs {
    min-width: 450px;
  }

  .cd-container {
      padding-right: 5%;
      padding-left: 5%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
  }

  .cd {
      height: 300px;
      max-width: 240px;
      border: solid 1px black;
      margin: 20px;
  }

  .clarity:hover {
      opacity: 0.6;
  }

  .search-io {
      padding: 0 50px;
  }
</style>

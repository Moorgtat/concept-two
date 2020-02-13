<template>
  <div id="app">
    <div id="nav">
      <router-link to="/songs">Songs</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link v-if="!$store.state.isUserLoggedIn" to="/login">Login</router-link> |
      <router-link v-if="!$store.state.isUserLoggedIn" to="/register">Register</router-link>
      <button v-if="$store.state.isUserLoggedIn" @click="logout" class="btn-one">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push('/songs')
    }
  }
}
</script>

<style>
    #app {
        text-align: center;
        font-family: fantasy;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    input {
        outline-style: none;
        font-family: fantasy;
        height: 25px;
        width: 80%;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    .btn-one {
        outline-style: none;
        height: 40px;
        width: 70px;
        font-family: fantasy;
        background: white;
        border: 1px solid black;
        border-radius: 15px;
        transition: 1s ease;
        margin: 5px;
    }

    .btn-one:hover {
        background: rgba(103, 128, 159, 0.2);
    }

    .btn-two {
        outline-style: none;
        height: 30px;
        width: 50px;
        font-family: fantasy;
        background: white;
        border: 1px solid black;
        border-radius: 15px;
        transition: 1s ease;
        margin: 5px;
    }

    .btn-two:hover {
        background: rgba(103, 128, 159, 0.2);
    }
</style>

<template>
  <div id="app">
    <div id="nav">
      <router-link to="/songs">Songs</router-link>
      <div id="logreg-container">
      <router-link v-if="!$store.state.isUserLoggedIn" to="/login">Login</router-link>
      <router-link v-if="!$store.state.isUserLoggedIn" to="/register"> | Register</router-link>
      </div>
      <button id="btn-logout" v-if="$store.state.isUserLoggedIn" @click="logout" class="btn-one"><strong>Logout</strong></button>
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
  @import url('https://fonts.googleapis.com/css?family=Lacquer&display=swap');
  #app {
    text-align: center;
    font-family: 'Lacquer';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  #nav {
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 32px;
  }

  input {
    outline-style: none;
    font-family: 'Lacquer';
    height: 25px;
    width: 300px;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  label {
    margin: 5px;
  }

  a {
    color: black;
    text-decoration: none;
  }

  .btn-one {
    outline-style: none;
    font-family: 'Lacquer';
    height: 40px;
    width: 70px;
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
    font-family: 'Lacquer';
    height: 30px;
    width: 50px;
    background: white;
    border: 1px solid black;
    border-radius: 15px;
    transition: 1s ease;
    margin: 5px;
  }

  .btn-two:hover {
    background: rgba(103, 128, 159, 0.2);
  }

  #btn-logout {
    position: absolute;
    right: 20px;
    top: 20px;
  }
  #logreg-container {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 16px;
  }
</style>

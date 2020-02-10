<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
  #app {
    text-align: center;
    font-family: fantasy;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  input {
   outline-style: none;
    font-family: fantasy;
   height: 25px;
    width: 180px;
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
  }
  .btn-one:hover {
    background: rgba(103, 128, 159, 0.2);
  }
</style>

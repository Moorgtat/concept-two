<template>
    <div id="login">
        <h2>Login</h2>
        <input type="email" name="email" v-model="email" placeholder="email"/>
        <br>
        <input type="password" name="password" v-model="password" placeholder="password"/>
        <br>
        <div v-html="error"></div>
        <br>
        <button class="btn-one" @click="login">Login</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push('/songs')
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>

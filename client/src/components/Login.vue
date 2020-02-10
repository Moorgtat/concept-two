<template>
    <div id="login">
        <h2>This is the log in page</h2>
        <input type="email" name="email" v-model="email" placeholder="email"/>
        <br>
        <input type="password" name="password" v-model="password" placeholder="password"/>
        <br>
        <div v-html="error"></div>
        <br>
        <button class="btn-one" @click="login">Log in</button>
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
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>

</style>

<template>
    <div id="register">
        <h1>This is the register page</h1>
        <input type="email" name="email" v-model="email" placeholder="email"/>
        <br>
        <input type="password" name="password" v-model="password" placeholder="password"/>
        <br>
        <div v-html="error"></div>
        <br>
        <button @click="register">Register</button>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
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

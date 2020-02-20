<template>
  <div class="container">
    <div>
      <logo />
      <div>
        <h1 class="title">
          weather-petition votes
        </h1>
        <h2 class="subtitle">
          Online-Petitions-Site gegen schlechtes Wetter am Wochenende
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: ''
      }
    }
  },
  computed: {
    formIsValid () {
      return this.form.firstName.length > 0 && this.form.lastName.length > 0 && this.form.email.length > 0
    }
  },
  methods: {
    onSubmit () {
      if (!this.formIsValid) { return }

      axios.get('', { params: this.form }).then((response) => {
        console.log('Form has been posted', response)
      }).catch((err) => {
        console.log('An error ocurred', err)
      })
    }
  }
}
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 50px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 22px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>

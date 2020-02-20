<template>
  <div>
    <h1 class="title">
      Create A Vote
    </h1>
    <h2 class="subtitle">
      Online-Petitions-Site gegen schlechtes Wetter am Wochenende
    </h2>
    <div class="row">
      <div class="col-12">
        <form @submit.prevent="onSubmit">
          <BaseInput
            v-model="form.vorname"
            label="Vorname:"
          />
          <BaseInput
            v-model="form.nachname"
            label="Nachname:"
          />
          <BaseInput
            v-model="form.wohnort"
            label="Wohnort:"
          />

          <BaseInput
            v-model="form.email"
            label="Email:"
            type="email"
          />
          <BaseInput
            v-model="form.gebdatum"
            label="Geburtsdatum:"
          />
          <BaseInput
            v-model="form.kommentar"
            label="Kommentar:"
          />
          <div class="form-group">
            <button
              :disabled="!formIsValid"
              type="submit"
              class="btn btn-primary"
              @click.prevent="onSubmit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <div v-for="(row, index) in list" :key="index">
      {{ row.vorname }} -  {{ row.nachname }}
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import BaseInput from '@/components/BaseInput'
const todos = [{
  name: 'Debug UI',
  complete: false
}, {
  name: 'Refactor build step',
  complete: true
}, {
  name: 'Upgrade Component',
  complete: false
}]

export default {
  name: 'Create',
  components: { BaseInput },
  data () {
    return {
      form: {
        vorname: '',
        nachname: '',
        wohnort: '',
        email: '',
        gebdatum: '',
        kommentar: ''
      },
      list: []
    }
  },
  computed: {
    formIsValid () {
      return this.form.vorname.length > 0 && this.form.nachname.length > 0 && this.form.email.length > 0
    },
    /**
     * Returns a list of todos with the completed ones removed, when the application is so configured.
     */
    filteredTodos () {
      return this.todos
        .filter(todo => this.showComplete ? true : !todo.complete)
    },

    /**
     * A boolean indicating if the submit button should be disabled, based on the content of the input box.
     * This method could be upgraded to take into accounts other things - like if the text input is valid based on the output of some validator.
     */
    submitIsDisabled () {
      return this.text === ''
    }
  },
  methods: {
    onSubmit () {
      console.log('click')
      if (!this.formIsValid) { return }

      // axios.post('http://localhost:3000/index', { params: this.form })
      //   .then((response) => {
      //     console.log('Form has been posted', response)
      //   }).catch((err) => {
      //     console.log('An error occurred', err)
      //   })
      this.list.push(this.form)
      console.log('LIST', this.list)
    },
    /**
     * addTodo() takes whatever is in the text input box, and makes it into a list element. There is no need to call a `render()` method, as Vue can determine on its own what to redraw.
     */
    addTodo () {
      todos.push({
        name: this.text,
        complete: false
      })

      /**
       * Vue components can access their own properties through the "this" special keyword.
       */
      this.text = ''
    }
  }
}
</script>

<style scoped>

</style>

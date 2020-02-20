export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, { petition }) {
    state.list.splice(state.list.indexOf(petition), 1)
  },
  toggle (state, petition) {
    petition.done = !petition.done
  }
}

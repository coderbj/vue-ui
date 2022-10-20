import Card from './src/main.vue'

export default {
  install(app:any) {
    app.component(Card.name,Card)
  }
}


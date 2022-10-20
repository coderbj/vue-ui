import Card from './src/main.vue'
Card.install = (app:any) => {
  app.component(Card.name,Card)
}
export default Card
/*export default {
  install(app:any) {
    app.component(Card.name,Card)
  }
}*/


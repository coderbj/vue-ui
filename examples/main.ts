import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)

import "../components/css/card.scss"
import Card from "../components/lib/card"
app.use(Card)

app.mount('#app')

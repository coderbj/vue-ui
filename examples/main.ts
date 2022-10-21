import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)
import '../components/css/index.scss'
import tui from "../components/lib"
app.use(tui)

app.mount('#app')

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)
import '../components/css/index.scss'
import bui from "../components/lib"
app.use(bui)

app.mount('#app')

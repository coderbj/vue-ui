import type {App} from 'vue'
// 导入组件
import Card from "./card"

// 保存所有组件
const components:any[] = [
  Card,
]

const install = function (app:App) {
  components.forEach(i => {
    app.use(i)
  })
}
const tui = {
  install
}

// 为了支持按需导入
export {Card}
// 为了全部导入
export default tui


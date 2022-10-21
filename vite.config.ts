import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import { resolve } from "path";
export default defineConfig({
  build: {
    lib: {
      entry: './components/lib/index.ts',
      name: 'texture-ui',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', '@types/node', '@vitejs/plugin-vue','gulp','gulp-minify-css','gulp-sass', 'sass', 'typescript', 'unplugin-vue-define-options', 'vite', 'vue-tsc',],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue(),DefineOptions()],
  server: {
    host: '0.0.0.0',
    port:8080
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },

})

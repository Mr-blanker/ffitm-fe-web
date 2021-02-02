/*
 * @Description: vite配置
 * @Autor: zhenghui
 * @Date: 2021-01-28 10:33:40
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    "@": pathResolve("src"),
  },
  plugins: [vue()]
})

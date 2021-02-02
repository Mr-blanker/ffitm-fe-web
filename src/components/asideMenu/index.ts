/*
 * @Description: 
 * @Autor: zhenghui
 * @Date: 2021-01-29 11:01:34
 */
import './src/styles/menu.scss';
import { App } from 'vue';
import AsideMenu from './src/menu.vue';
import type { SFCWithInstall } from '../../utils/types';

AsideMenu.install = (app: App): void => {
  app.component(AsideMenu.name, AsideMenu)
}

const _AsideMenu: SFCWithInstall<typeof AsideMenu> = AsideMenu

export default _AsideMenu

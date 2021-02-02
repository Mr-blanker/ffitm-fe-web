/*
 * @Description: 
 * @Autor: zhenghui
 * @Date: 2021-01-29 11:01:34
 */
import { App } from 'vue';
import Header from './src/header.vue';
import type { SFCWithInstall } from '../../utils/types';

Header.install = (app: App): void => {
  app.component(Header.name, Header)
}

const _Header: SFCWithInstall<typeof Header> = Header

export default _Header

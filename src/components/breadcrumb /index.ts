/*
 * @Description: 
 * @Autor: zhenghui
 * @Date: 2021-01-29 11:01:34
 */
import { App } from 'vue';
import Breadcrumb  from './src/main.vue';
import type { SFCWithInstall } from '../../utils/types';

Breadcrumb.install = (app: App): void => {
  app.component(Breadcrumb.name, Breadcrumb)
}

const _Breadcrumb: SFCWithInstall<typeof Breadcrumb> = Breadcrumb;

export default _Breadcrumb;

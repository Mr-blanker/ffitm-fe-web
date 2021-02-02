/*
 * @Description: 菜单树配置
 * @Autor: zhenghui
 * @Date: 2021-02-01 16:00:48
 */

interface MenuMap{
  path:string
  title:string
  icon:string
  children?:Array<MenuMap|[]>
}

const menuList:Array<MenuMap> = [
  {
    path:'/home/devFramework',
    title:'开发框架',
    icon:'el-icon-s-promotion',
    children:[]
  },
  {
    path:'/home/npm',
    title:'NPM管控',
    icon:'el-icon-data-analysis',
    children:[]
  },
  {
    path:'/home/gitlab',
    title:'代码库',
    icon:'el-icon-data-analysis',
    children:[]
  }
]

export default menuList
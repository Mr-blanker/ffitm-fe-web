<!--
 * @Description: 
 * @Autor: zhenghui
 * @Date: 2021-01-29 17:04:44
-->
<template>
  <div :class="['sys-menu__container',{'sys-menu__collapse':collapse}]">
    <div class="sys-menu__title">
      {{collapse?'FE':'FFITM-FE平台'}}
    </div>
    <el-menu
      default-active="/home/devFramework"
      @select="handleSelect"
      :collapse="collapse"
      :background-color="bgColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
    >
      <menu-item
        v-for="menu in menuList"
        :key="menu.path"
        :item="menu"
      />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import menuItem from './menuItem.vue';
import menuList from './config/menuList';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'AsideMenu',
  props:{
    menuTitle: {
      required: false,
      default: '',
      type: String
    },
    collapse: {
      required: true,
      default: false,
      type: Boolean
    },
    bgColor: {
      type: String,
      required: false,
      default: '#555d63'
    },
    textColor: {
      type: String,
      required: false,
      default: '#fff'
    },
    activeTextColor: {
      type: String,
      required: false,
      default: '#fff'
    },
    menuMapList: {
      required: true,
      type: Array,
      default:()=>[]
    }
  },
  components: {
    menuItem
  },
  setup(props,ctx) {
    const router = useRouter();

    const state = reactive({
      loading: false,
      menuList:props.menuMapList.length?props.menuMapList:menuList
    });
    
    const handleSelect = (key:string, keyPath:string):void=>{
        router.push(key)
    }

    onMounted(() => {});
    return {
      ...toRefs(state),
      menuList,
      handleSelect
    };
  },
})
</script>
<style lang="scss" scoped>
</style>

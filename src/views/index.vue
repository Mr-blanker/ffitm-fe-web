<!--
 * @Description: 
 * @Autor: zhenghui
 * @Date: 2021-01-29 10:36:55
-->
<template>
  <div class="main-view">
    <aside-menu v-model:collapse="collapse"></aside-menu>
    <div class="main-view__container">
      <nav-header>
        <menu-collapse v-model:collapse="collapse"></menu-collapse>
        <breadcrumb class="breadcrumb-text"></breadcrumb>
      </nav-header>
      <div class="main-view__area">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
import asideMenu from '../components/asideMenu';
import menuCollapse from '../components/asideMenu/src/menuCollapse.vue';
import navHeader from '../components/navHeader';
import breadcrumb  from '../components/breadcrumb ';

export default defineComponent({
  name: 'index',
  components: {
    asideMenu,
    menuCollapse,
    navHeader,
    breadcrumb 
  },
  setup() {
    const state = reactive({
      loading: false,
      collapse:false
    });
  onMounted(() => {});
  return {
    ...toRefs(state)
   };
  },
});
</script>
<style lang="scss" scoped>
.main-view {
  display: flex;
  &__container {
    flex:1;
    background: #f9f9f9;
  }
  &__area {
    margin:20px;
    background: #fff;
    height: calc(100vh - 90px);
  }
  .breadcrumb-text {
    margin-left: 10px;
  }
}
</style>
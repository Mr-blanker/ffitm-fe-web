<!--
 * @Description: 
 * @Autor: zhenghui
 * @Date: 2021-02-02 10:22:07
-->
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      :to="{ path:item.path }"
      :key="index"
      v-for="(item,index) in routes"
    >
      {{item.name}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted} from 'vue';
import { useRoute,onBeforeRouteUpdate } from 'vue-router'
export default defineComponent({
  name: 'breadcrumb',
  components: {},
  setup() {
    const route = useRoute()
    const routes = route.matched.slice(1)
    const state = reactive({
      loading: false,
      routes
    });

    onBeforeRouteUpdate((to) => {
      state.routes = to.matched.slice(1);
    });

    onMounted(() => {});
    return {
      ...toRefs(state)
     };
  },
});
</script>
<style lang="scss" scoped>
</style>
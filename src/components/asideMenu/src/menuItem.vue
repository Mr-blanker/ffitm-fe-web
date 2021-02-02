<!--
 * @Description: 
 * @Autor: zhenghui
 * @Date: 2021-02-01 10:31:17
-->
<template>
  <div v-if="item.children">
    <template v-if="item.children.length == 0">
      <el-menu-item :index="item.path">
        <i :class="item.icon"></i>
        <span class="menu-title">{{item.title}}</span>
      </el-menu-item>
    </template>

    <el-submenu
      v-else
      :index="item.path"
    >
      <template slot="title">
        <i :class="item.icon"></i>
        <span class="menu-title">{{item.title}}</span>
      </template>

      <template v-for="child in item.children">
        <aside-menu-item
          v-if="child.children&&child.children.length>0"
          :item="child"
          :key="child.path"
        />
        <el-menu-item
          v-else
          :key="child.path"
          :index="child.path"
        >
          <i :class="item.icon"></i>
          <span class="menu-title">{{child.title}}</span>
        </el-menu-item>
      </template>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
export default defineComponent({
  name: 'AsideMenuItem',
  props:{
    item: {
      type: Object,
      required: true
    }
  },
  components: {},
  setup() {
    const state = reactive({
      loading: false,
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
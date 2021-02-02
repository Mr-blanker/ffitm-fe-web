<!--
 * @Description: 
 * @Autor: zhenghui
 * @Date: 2021-01-31 15:32:05
-->
<template>
  <div class="header-container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
export default defineComponent({
  name: 'navHeader',
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
.header-container {
  height: 50px;
  line-height: 50px;
  background: #fff;
  padding:0 10px;
  cursor: pointer;
  display: flex;
  align-items:center;
}
</style>
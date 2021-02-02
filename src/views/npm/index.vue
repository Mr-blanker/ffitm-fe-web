<!--
 * @Description: 
 * @Autor: zhenghui
 * @Date: 2021-02-02 10:13:35
-->
<template>
  <div class=""></div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
export default defineComponent({
  name: 'index',
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

<!--
 * @Description: 菜单伸缩按钮
 * @Autor: zhenghui
 * @Date: 2021-02-01 10:54:33
-->
<template>
  <span
    :class="['collapse',collapse?'el-icon-s-unfold':'el-icon-s-fold']"
    @click="handleCollapse"
  ></span>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue';
export default defineComponent({
  name: 'menuCollapse',
  props:{
    collapse:{
      type:Boolean,
      default:false
    }
  },
  components: {},
  setup(props,{emit}) {
    const {collapse} = toRefs(props)

    const state = reactive({
      collapse: collapse.value,
    });

    //菜单折叠开关
    const handleCollapse = ()=>{
      state.collapse = !state.collapse;
      emit('update:collapse', state.collapse)
    }

    onMounted(() => {});
    
    return {
      handleCollapse,
      ...toRefs(state)
     };
  },
});
</script>
<style lang="scss" scoped>
.collapse{
  font-size:20px;
  vertical-align: middle;
}
</style>
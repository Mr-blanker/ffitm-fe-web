<!--
 * @Description: 
 * @Autor: zhenghui
 * @Date: 2021-01-29 10:42:16
-->
<template>
  <div class="start">
    <div class="start-header">
      <img src="~/ffitm-fe-web/src/assets/images/consistency.png">
      <h1>FFITM-FE平台代码自动化生成工具</h1>
    </div>
    <el-steps
      :active="stepIndex"
      align-center
      class="start-step"
    >
      <el-step
        title="基本信息填写"
        description="必填"
      ></el-step>
      <el-step
        title="项目配置"
        description="必填"
      ></el-step>
      <el-step
        title="完成"
        description="必填"
      ></el-step>
    </el-steps>
    <div class="start-form">
      <el-form
        ref="form"
        label-width="120px"
        label-position="top"
        :model="startForm"
        v-show="stepIndex===1"
      >
        <el-form-item label="项目名称">
          <el-input
            v-model="startForm.name"
            placeholder="请输入项目名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="模板版本号">
          <el-select
            v-model="startForm.version"
            placeholder="请选择模板版本号"
          >
            <el-option
              label="v0.0.1"
              value="v0.0.1"
            ></el-option>
            <el-option
              label="v0.0.2"
              value="v0.0.2"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="start-btn">
      <el-button
        type="primary"
        @click="handlerStep(1)"
      >
        上一步
      </el-button>
      <el-button
        type="primary"
        @click="handlerStep(2)"
      >
        下一步
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,reactive,toRefs} from 'vue'

export default defineComponent({
  name: 'index',
  components: {
  },
  setup(){
    const state = reactive({
      startForm:{
        name:'',
        version:''
      },
      stepIndex:1
    })
    const handlerStep=(step:number):void=>{
      state.stepIndex = step;
    }
    return {
      ...toRefs(state),
      handlerStep
    }
  }
})
</script>

<style lang="scss" scoped>
.start {
  padding: 10px;
  &-header {
    background-color:#fbfcfd;
    font-size: 25px;
    height: 120px;
    line-height: 120px;
    display: flex;
    align-items: center;
    border: 1px solid #dcdfe6;
    border-radius: 2px;
    img {
      width: 80px;
      height: 80px;
      margin: 0 20px;
    }
  }
  &-step {
    margin: 40px 0 0 0;
  }
  &-form {
    width: 60%;
    margin:20px auto 0 ;
    .el-select {
      width: 100%;
    }
  }
  &-btn {
    width: 60%;
    margin:80px auto 0 ;
    text-align: center;
    .el-button {
      margin: 0 40px;
    }
  }
}
</style>

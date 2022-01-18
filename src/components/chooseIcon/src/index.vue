<template>
   <!--子组件-->
   <el-button @click="handleClick" type="primary">
     <slot></slot>
   </el-button>
   <el-dialog :title="title" v-model="visible">1111</el-dialog>
</template>

<script lang="ts" setup>
import {ref, watch} from "vue"

let props =defineProps<{
  //弹出框的标题
  title:string,
  //控制弹出框的显示与隐藏
  visible:boolean
}>()
let emits = defineEmits(['update:visible'])
let  handleClick=() =>{
    //需要修改父组件的数据
    emits('update:visible',!props.visible)
}
//拷贝一份父组件传递过来的visible
// let dialogVisible = ref(props.visible)
watch(()=> props.visible,val=>{
  //当visible发生改变时候，监听visible，再次改变visible的值
  emits('update:visible',val)
})
</script>

<style scoped>

</style>
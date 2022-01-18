<template>
   <!--父组件-->
   <div>
       {{visible}}
       <choose-icon title="选择图标" v-model:visible="visible">
         选择图标
       </choose-icon>
   </div>
</template>

<script lang="ts" setup>
   //引入chooseIcon作为components chooseIcon下的插槽
   import ChooseIcon from '../../components/chooseIcon/src/index.vue'
   import {ref} from 'vue'
   let visible = ref(false)
</script>

<style scoped>

</style>
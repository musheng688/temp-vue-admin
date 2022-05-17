<!-- 折叠菜单 -->
<template>
  <el-icon style="font-size: 25px" @click="() => (isCollapse = !isCollapse)">
    <component :is="isCollapse ? Expand : Fold"></component>
  </el-icon>
</template>

<script setup>
import { Expand, Fold } from "@element-plus/icons-vue";
//父组件传入的值
defineProps({
  isCollapse: Boolean,
});
</script>

<style lang="scss"></style>

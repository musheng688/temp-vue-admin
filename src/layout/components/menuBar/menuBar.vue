<template>
  <div>
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
    >
      <menu-item :menus="menus"></menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import menuItem from "./menuItem.vue";

//父组件传入的值
defineProps({
  isCollapse: Boolean,
  menus: Array,
});
</script>

<style lang="less"></style>

<template>
  <template v-for="menu in menus" ::key="menu.path">
    <el-sub-menu
      v-if="menu.children && menu.children.length > 0"
      :index="menu.path"
    >
      <template #title>
        <el-icon><component :is="menu.icon"></component></el-icon>
        <span>{{ menu.menuName }}</span>
      </template>
      <menu-item :menus="menu.children"></menu-item>
    </el-sub-menu>
    <el-menu-item v-else :index="menu.path">
      <el-icon><component :is="menu.icon"></component></el-icon>
      <span>{{ menu.menuName }}</span>
    </el-menu-item>
  </template>
</template>

<script setup>
defineProps({ menus: Array });
</script>

<style lang="scss"></style>

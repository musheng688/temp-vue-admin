<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="" />
    <h2 v-show="!isCollapse" class="title">Vue3-admin</h2>
  </div>
</template>

<script setup>
//父组件传入的值
defineProps({
  isCollapse: { type: Boolean },
});
</script>

<style lang="less" scoped>
.logo {
  display: flex;
  align-items: center;
  padding-left: 14px;
  height: 64px;
  overflow: hidden;
  white-space: nowrap;
  img {
    width: 32px;
    height: 32px;
    margin-left: 8px;
  }
  .title {
    font-size: 20px;
    color: brown;
    margin-bottom: 0;
  }
}
</style>

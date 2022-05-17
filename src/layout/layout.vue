<template>
  <div class="layout">
    <el-container>
      <el-aside :style="'width:' + autoWidth">
        <!-- logo -->
        <logo-bar :isCollapse="isCollapse"></logo-bar>
        <!-- 菜单 -->
        <menu-bar :isCollapse="isCollapse" :menus="menus"></menu-bar>
      </el-aside>
      <el-container>
        <el-header>
          <el-row>
            <!-- 折叠菜单 -->
            <el-icon
              style="font-size: 25px"
              @click="() => (isCollapse = !isCollapse)"
            >
              <component :is="isCollapse ? Expand : Fold"></component>
            </el-icon>
            <breadcrumb></breadcrumb>
          </el-row>
        </el-header>
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import LogoBar from "./components/logoBar/logoBar.vue";
import MenuBar from "./components/menuBar/menuBar.vue";
import breadcrumb from "./components/HeaderBar/breadcrumb.vue";
import { ref, computed, reactive } from "vue";
import { Expand, Fold } from "@element-plus/icons-vue";
import appMain from "./components/appMain/appMain.vue";

//是否折叠
const isCollapse = ref(false);

//侧边栏折叠宽度
const autoWidth = computed(() => {
  if (isCollapse.value) {
    return "64px";
  } else {
    return "200px";
  }
});

const menus = reactive([
  {
    menuName: "首页",
    path: "/",
    icon: "HomeFilled",
    children: [],
  },
  {
    menuName: "用户管理",
    path: "/user",
    icon: "HomeFilled",
    children: [],
  },
  {
    menuName: "商品管理",
    path: "/goods",
    icon: "HomeFilled",
    children: [],
  },
  {
    menuName: "订单管理",
    path: "/order",
    icon: "HomeFilled",
    children: [],
  },
  {
    menuName: "系统管理",
    path: "/systemset",
    icon: "HomeFilled",
    children: [],
  },
]);
</script>

<style lang="scss">
.layout {
  display: flex;
  height: 100vh;
  // 侧边栏
  .el-aside {
    overflow: hidden;
    background-color: $menuBg;
    width: 200px;

    // 过度动画
    transition-property: width;
    transition-duration: 0.5s;
    transition-timing-function: linear;

    .el-menu {
      background-color: $menuBg;
      border: none;
    }
  }

  .el-header {
    display: flex;
    align-items: center;
  }
}
</style>

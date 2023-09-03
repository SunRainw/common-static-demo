<script setup lang="ts">
import { RouterView } from "vue-router";
import { routerConfig } from "@/constants/routerConfig";
</script>

<template>
  <div class="page-layout">
    <side-menu :menu-list="routerConfig" />
    <div class="content-container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="less">
.page-layout {
  display: grid;
  grid-template-columns: 240px calc(100% - 240px);
  // width: 100%;
  .ant-menu {
    height: 100vh;
    overflow: auto;
    // width: 200px;
  }
  .content-container {
    // position: relative;
    // flex: 1;
    // width: calc(100vw - 200px);
    height: 100vh;
    overflow: auto;
    // width: 100%;
  }
}
</style>

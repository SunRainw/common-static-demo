<template>
  <a-menu
    mode="inline"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @click="onMenuClick"
  >
    <template v-for="menu in menuList" :key="menu.name">
      <menu-item />
    </template>
  </a-menu>
</template>
<script lang="ts" setup>
defineProps<{
  menuList: RouteRecordRaw[];
}>();
import { reactive, ref } from "vue";
import { RouteRecordRaw, useRoute } from "vue-router";
import type { MenuProps, ItemType } from "ant-design-vue";

const openKeys = ref<Array<string | number>>([]);
const selectedKeys = ref<Array<string | number>>([]);
const route = useRoute();
console.info(route);
const onMenuClick: MenuProps["onClick"] = () => {};
</script>
<style scoped lang="less"></style>

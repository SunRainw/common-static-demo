<template>
  <a-menu-item :key="menu.name">
    <router-link :to="menu.path">
      <Icon v-if="menu.meta?.icon" :icon="menu.meta?.icon"></Icon>
      <span>{{ menu.meta?.title }}</span>
    </router-link>
  </a-menu-item>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
defineProps<{
  menu: any;
}>();
// 需传入生命周期执行函数
onMounted(() => {});
</script>
<style lang="scss" scoped></style>

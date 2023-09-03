<template>
  <a-menu
    mode="inline"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    @click="onMenuClick"
  >
    <template v-for="menu in menuList" :key="menu.name">
      <template v-if="menu.children">
        <a-sub-menu :key="menu.name">
          <template #title>
            <span>
              <Icon
                v-if="menu.meta?.icon"
                :icon="(menu.meta?.icon as string)"
              ></Icon>
              <span>{{ menu.meta?.title }}</span>
            </span>
          </template>
          <template v-for="mi in menu.children" :key="mi.name">
            <menu-item :menu="mi" />
          </template>
        </a-sub-menu>
      </template>
      <template v-else>
        <menu-item :menu="menu" />
      </template>
    </template>
  </a-menu>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import type { MenuProps, ItemType } from "ant-design-vue";
defineProps<{
  menuList: RouteRecordRaw[];
}>();

const openKeys = ref<Array<string>>([]);
const selectedKeys = ref<Array<string>>([]);
const route = useRoute();
watchEffect(() => {
  if (route.name) {
    selectedKeys.value = [route.name as string];
    openKeys.value = [route.matched?.[0].name as string];
  }
});
const onMenuClick: MenuProps["onClick"] = () => {};
</script>
<style scoped lang="less"></style>

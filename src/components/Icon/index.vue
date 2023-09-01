<template>
  <component v-if="props.icon" :is="(antIcons as any)[props.icon]" />
</template>

<script setup lang="ts">
import * as antIcons from "@ant-design/icons-vue";
const props = withDefaults(
  defineProps<{
    icon: string;
  }>(),
  {
    icon: "",
  }
);
</script>

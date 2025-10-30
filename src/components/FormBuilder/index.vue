<template>
  <a-form ref="formRef" :rules="rules" :model="modalValue">
    <a-row :gutter="20">
      <a-col v-for="item in items" :key="item.key" :span="item.span || 24">
        <a-form-item :label="item.label" :name="item.key">
          <slot :name="item.key">
            <component
              :is="getComponent(item)"
              v-bind="getProps(item)"
              v-model:value="modalValue[item.key]"
            ></component>
          </slot>
        </a-form-item>
      </a-col>
    </a-row>
  </a-form>
</template>
<script setup lang="ts">
import {
  Checkbox,
  type FormInstance,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  Textarea,
} from "ant-design-vue";
import { computed, useTemplateRef } from "vue";
import { omit } from "lodash-es";

const props = defineProps(["formItems", "rules"]);
const formInstance = useTemplateRef<FormInstance>("formRef");
const modalValue = defineModel();

const componentMap = {
  input: Input,
  number: InputNumber,
  select: Select,
  textarea: Textarea,
  radio: Radio,
  checkbox: Checkbox,
  switch: Switch,
};

const items = computed(() => props.formItems?.filter((i) => !i.hidden));

const getProps = (item) => {
  if (item.props) return item.props;
  return omit(item, ["key", "label", "type"]);
};
const getComponent = (item) => {
  const { type } = item;
  if (type && typeof type !== "string") {
    return type;
  }
  return componentMap[type || "input"];
};
defineExpose({
  validate(...args) {
    return formInstance.value.validate(...args);
  },
});
</script>

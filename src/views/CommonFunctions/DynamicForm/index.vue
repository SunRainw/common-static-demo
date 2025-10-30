<template>
  <div class="dynamic-form-container">
    <div class="config-wrp">
      <form-builder-hook></form-builder-hook>
      <a-button @click="onConfigSubmit" type="primary">提交</a-button>
    </div>
    <form-builder
      ref="formRef"
      :formItems="formItems"
      v-model="formData"
      :rules="rules"
    ></form-builder>
    <a-button v-show="configData.items" @click="onSubmit">提交</a-button>
  </div>
</template>
<script setup lang="ts">
import FormBuilder from "@/components/FormBuilder/index.vue";
import { useFormBuilder } from "@/hooks/useFormBuilder";
import { ref, useTemplateRef } from "vue";

const configData = ref({
  items: "",
  rules: "",
});

const configItems = [
  {
    label: "表单配置",
    key: "items",
    type: "textarea",
    placeholder: `[
  {
    label: "姓名",
    key: "name",
    type: "input",
    placeholder: "请输入姓名",
  },
]`,
    rows: 8,
  },
  {
    label: "表单校验规则",
    key: "rules",
    type: "textarea",
    placeholder: `{
      name: [
        { required: true, message: "请输入姓名", trigger: "blur" },
        { min: 2, max: 10, message: "长度在2到10个字符", trigger: "blur" },
      ],
    }`,
    rows: 6,
  },
];

const validateConfig = (_: any, value: string) => {
  try {
    robustJSONParse(value);
    return Promise.resolve();
  } catch (e) {
    return Promise.reject();
  }
};

const configRules = {
  items: [
    { required: true, message: "请输入表单配置", trigger: "blur" },
    { validator: validateConfig, trigger: "bulr" },
  ],
  rules: [
    { required: true, message: "请输入表单校验规则", trigger: "blur" },
    { validator: validateConfig, trigger: "bulr" },
  ],
};
// hooks写法
const { FormBuilder: FormBuilderHook, validate: hookValidate } = useFormBuilder(
  {
    formItems: configItems,
    rules: configRules,
    modelValue: configData,
  }
);

const formData = ref({
  name: undefined,
  age: undefined,
  sex: undefined,
});

function robustJSONParse(str) {
  // 1. 处理字符串中的转义字符
  const escapedStr = str.replace(/\\('|")/g, "__ESC_$1__");

  // 2. 核心转换
  let jsonStr = escapedStr
    .replace(/([{,]\s*)([a-zA-Z_$][\w$]*)(\s*:)/g, '$1"$2"$3')
    .replace(/'([^']*)'/g, '"$1"')
    .replace(/\s*[\r\n]+\s*/g, " ")
    .replace(/,\s*}/g, "}")
    .replace(/,\s*]/g, "]")
    .replace(/\s+/g, " "); // 压缩多余空格

  // 3. 恢复转义字符
  jsonStr = jsonStr.replace(/__ESC_('|")__/g, "\\$1");
  return JSON.parse(jsonStr);
}

const formInstance = useTemplateRef("formRef");
const formItems = ref([]);
const rules = ref({});

const onSubmit = async () => {
  await formInstance.value.validate();
  console.info("formdata.value =>", formData.value);
};
const onConfigSubmit = () => {
  hookValidate().then(() => {
    try {
      formItems.value = robustJSONParse(configData.value.items);
      rules.value = robustJSONParse(configData.value.rules);
      formData.value = formItems.value.reduce(
        (acc, cur) => ({ ...acc, [cur.key]: undefined }),
        {}
      );
    } catch (e) {}
  });
};

// const rules = {
//   name: [
//     { required: true, message: "请输入姓名", trigger: "blur" },
//     { min: 2, max: 10, message: "长度在2到10个字符", trigger: "blur" },
//   ],
//   age: [
//     { required: true, message: "请输入年龄", trigger: "blur" },
//     {
//       type: "number",
//       min: 1,
//       max: 100,
//       message: "年龄必须在1-100之间",
//       trigger: "blur",
//     },
//   ],
// };

// const formItems = computed(() => [
//   {
//     label: "姓名",
//     key: "name",
//     type: "input",
//     placeholder: "请输入姓名",
//     span: 12,
//   },
//   {
//     label: "哈哈哈",
//     key: "custom",
//     type: () => h("div", {}, "自定义组件"),
//     span: 12,
//   },
//   {
//     label: "年龄",
//     key: "age",
//     type: "number",
//     placeholder: "请输入年龄",
//   },
//   {
//     label: "性别",
//     key: "sex",
//     type: "select",
//     hidden: formData.value.name === "张三",
//     placeholder: "请选择性别",
//     options: [
//       {
//         label: "男",
//         value: 1,
//       },
//       {
//         label: "女",
//         value: 2,
//       },
//     ],
//   },
// ]);
</script>
<style lang="less">
.dynamic-form-container {
  padding: 40px;
  margin: 0 auto;
  min-width: 800px;
  width: 60%;
  .config-wrp {
    margin-bottom: 30px;
  }
}
</style>

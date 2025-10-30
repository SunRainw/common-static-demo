import FormBuilder from "@/components/FormBuilder/index.vue";
import { h, reactive, ref } from "vue";
export const useFormBuilder = (props) => {
  const formRef = ref();
  const Component = (_, { slots }) => {
    return h(FormBuilder, { ...reactive(props), ref: formRef }, slots);
  };
  return {
    FormBuilder: Component,
    validate(...args) {
      return formRef.value?.validate(...args);
    },
  };
};

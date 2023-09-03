<template>
  <div class="fragment-upload-container">
    <div>
      <div class="option-wrp">
        <span>是否使用webWork加速：</span>
        <a-radio-group v-model:value="isWebWork">
          <a-radio :value="true" key="0">是</a-radio>
          <a-radio :value="false" key="1">否</a-radio>
        </a-radio-group>
      </div>
      <div class="option-wrp">
        <span>分片大小：</span>
        <a-input-number :min="1" v-model:value="chunkSize" />
        <a-select v-model:value="chunkUnit">
          <a-select-option
            v-for="(unit, i) in chunkUnits"
            :key="unit"
            :value="i"
            >{{ unit }}</a-select-option
          >
        </a-select>
      </div>
      <a-upload :showUploadList="false" :beforeUpload="handleBeforeUpload">
        <a-button>
          <upload-outlined></upload-outlined>
          文件分片上传
        </a-button>
      </a-upload>
      <div class="option-wrp">
        <a-table :dataSource="dataSource" :columns="columns"></a-table>
      </div>
    </div>
    <a-float-button
      @click="handleClick"
      shape="circle"
      :style="{ right: '50px' }"
    />
  </div>
  <a-modal v-model:open="visible" title="实现分析" :footer="null" wrapClassName="upload-analysis-modal">
    <p>
      1. 分片：
      <p>1. 1 根据文件的大小和单片大小，计算出分片的数量</p>
      <p>1. 2 使用<span class="hight">fileReader.readAsArrayBuffer()</span>读取指定片段文件</p>
      <p>1. 3 将文件片段使用sparkMd5转换为hash值</p>
    </p>
    <p>2. 直接循环执行分片即可，但这样很会使主线程卡顿</p>
    <p>3. 为了减轻主线程压力，可以使用<span class="hight">WebWorker(专门用于计算)</span>开启其他线程进行分片计算</p>
    <p>4. 在开启worker的js中，使用<span class="hight">Promise.all</span>同时执行多个分片，减少执行时间，最后将解构一起返回</p>
    <p>
      3. 由于旋转轴如果在正中心，无法达到效果，需要使用
      <span class="hight">transform-origin</span>
      变化圆心
    </p>
  </a-modal>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  curFileNormal,
  curFileWebWork,
  formatStorageNumberToObj,
} from "@/utils";
const chunkUnits = ["KB", "MB", "GB", "TB"];
const columns = [
  {
    title: "序号",
    dataIndex: "index",
    key: "index",
    customRender: ({ index }) => index + 1,
  },
  {
    title: "文件名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "文件大小",
    dataIndex: "size",
    key: "size",
  },
  {
    title: "分片大小",
    dataIndex: "chunkSize",
    key: "chunkSize",
  },
  {
    title: "分片个数",
    dataIndex: "chunkL",
    key: "chunkL",
  },
  {
    title: "分片耗时",
    dataIndex: "timer",
    key: "timer",
  },
  {
    title: "是否开启webWorker",
    dataIndex: "isWorker",
    key: "isWorker",
  },
];
const visible = ref<boolean>(false);
const handleClick = () => {
  visible.value = true;
};
const chunkSize = ref<number>(1); // 分片单个大小
const isWebWork = ref<boolean>(true); // 是否开启多线程
const dataSource = ref<any[]>([]); // 每次执行时间
const chunkUnit = ref<number>(1); // 分片单位
const handleBeforeUpload = async (file: File) => {
  const selectSize = chunkSize.value * Math.pow(2, 10 * (chunkUnit.value + 1));
  const size = Math.min(file.size, selectSize);
  const curFile = isWebWork.value ? curFileWebWork : curFileNormal;
  const timer = Date.now();
  const chunks = await curFile(file, size);
  const fileUnit = formatStorageNumberToObj(file.size);
  dataSource.value.push({
    key: Date.now(),
    name: file.name,
    size: `${fileUnit.number}${fileUnit.unit}`,
    chunkL: chunks.length,
    chunkSize: `${chunkSize.value}${chunkUnit.value}`,
    isWorker: isWebWork.value ? "是" : "否",
    timer: `${Date.now() - timer}ms`,
  });
  console.info(chunks);
};
</script>

<style scoped lang="less">
.fragment-upload-container {
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  // align-items: center;
  margin-top: 200px;
  .option-wrp {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }
}
.upload-analysis-modal {
  .ant-modal-body {
    p {
      margin-bottom: 12px;
      p {
        margin-bottom: 8px;
        text-indent: 20px;
      }
    }
  }
}
.hight {
  color: var(--light-color);
  white-space: nowrap;
}
</style>

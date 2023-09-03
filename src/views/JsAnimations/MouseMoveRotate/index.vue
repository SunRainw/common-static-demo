<template>
  <div class="card-container">
    <div
      class="card-wrp"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <img :src="card" alt="" />
      <a-float-button
        @click="handleClick"
        shape="circle"
        :style="{ right: '50px' }"
      />
    </div>
  </div>
  <a-modal v-model:open="visible" title="实现分析" :footer="null">
    <p>
      1. 设置x和y轴最大旋转范围，使用
      <span class="light">perspective(500px)</span>
      指定观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果
    </p>
    <p>2. 通过判断鼠标在容器中的位置，计算出卡片相对于最大值旋转的角度</p>
    <p>
      3: 使用
      <span class="light">v-bind()</span>
      绑定 <span class="light">rotateX和rotateY</span>的旋转角度
    </p>
  </a-modal>
</template>
<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

const xRange = Object.freeze([-10, 10]);
const yRange = Object.freeze([-10, 10]);

const getRotate = (range: readonly number[], value: number, max: number) =>
  (value / max) * (range[1] - range[0]) + range[0];

const rx = ref<string>("0deg");
const ry = ref<string>("0deg");
const visible = ref<boolean>(false);
const handleClick = () => {
  visible.value = true;
};
const card = ref<string>("");
onBeforeMount(() => {
  import("@/assets/images/cards/sun.jpg").then(({ default: url }) => {
    card.value = url;
  });
});
const handleMouseMove = (e: MouseEvent) => {
  const card: any = document.querySelector(".card-wrp");
  const { offsetWidth, offsetHeight } = card;
  ry.value = `${-getRotate(yRange, e.offsetX, offsetWidth)}deg`;
  rx.value = `${getRotate(xRange, e.offsetY, offsetHeight)}deg`;
};
const handleMouseLeave = () => {
  rx.value = "0deg";
  ry.value = "0deg";
};
</script>
<style lang="less" scoped>
.card-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #333;
  .card-wrp {
    width: 20%;
    border-radius: 8px;
    overflow: hidden;
    transform: perspective(500px) rotateX(v-bind(rx)) rotateY(v-bind(ry));
    // transition: 0.5s;
    &:hover {
      box-shadow: -3px -3px 10px #54a29e, 3px 3px 10px #a79d66;
    }

    // height: auto;
    img {
      width: 100%;
      height: auto;
      vertical-align: middle;
    }
  }
}
.light {
  color: var(--light-color);
  white-space: nowrap;
}
</style>

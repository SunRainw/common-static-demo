<template>
  <div class="olympic-container">
    <div class="slider-wrp">
      <span>单环大小</span>
      <a-slider v-model:value="ringWidth" :min="100" :max="200"></a-slider>
    </div>
    <div class="olympic-rings">
      <div class="ring" v-for="n in 5" :key="n"></div>
    </div>
    <a-float-button
      @click="handleClick"
      shape="circle"
      :style="{ right: '50px' }"
    />
  </div>
  <a-modal v-model:open="visible" title="实现分析" :footer="null">
    <p>
      1. 使用
      <span class="hight">transform: preserve-3d; </span>
      ：表示所有子元素在3D空间中呈现
    </p>
    <p>2. 利用<span class="hight">rotateX</span>将子元素绕X轴旋转</p>
    <p>
      3. 由于旋转轴如果在正中心，无法达到效果，需要使用
      <span class="hight">transform-origin</span>
      变化圆心
    </p>
  </a-modal>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
const ringWidth = ref<number>(100);
const cssWidth = computed(() => `${ringWidth.value || 0}px`);
const visible = ref<boolean>(false);
const handleClick = () => {
  visible.value = true;
};
</script>

<style scoped lang="less">
@max-width: calc(100vw - 200px);
@width: v-bind(cssWidth);
.olympic-container {
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.slider-wrp {
  // display: flex;
  // margin: 0 auto 30px;
  position: absolute;
  min-width: 200px;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 400px;
}
.olympic-rings {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  max-width: @max-width;
  width: calc(@width * 4);
  justify-content: center;
  transform-style: preserve-3d;
}
.ring {
  max-width: calc(@max-width / 4);
  max-height: calc(@max-width / 4);
  width: @width;
  height: @width;
  border: calc(@width / 10) solid #0081c8;
  border-radius: @width;
  margin: 0 calc(@width / 20);
  &:nth-child(2) {
    border-color: #000;
    transform-origin: center 75%;
    transform: rotateX(2deg);
  }
  &:nth-child(3) {
    border-color: #ee334e;
    transform-origin: center 75%;
    transform: rotateX(4deg);
  }
  &:nth-child(4) {
    border-color: #fcb131;
    margin-top: -12.5%;
    transform-origin: center 25%; // 选择中心 x: 中点，y: 25%
    transform: rotateX(1deg);
  }
  &:nth-child(5) {
    border-color: #00a651;
    margin-top: -12.5%;
    transform-origin: center 25%;
    transform: rotateX(3deg);
  }
}
.hight {
  color: var(--light-color);
}
</style>

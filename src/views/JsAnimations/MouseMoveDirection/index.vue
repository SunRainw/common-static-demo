<template>
  <div class="box-container">
    <div
      :class="`box ${direction}`"
      @mouseenter.stop="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <div class="bg"></div>
    </div>
    <a-float-button
      @click="handleClick"
      shape="circle"
      :style="{ right: '50px' }"
    />
  </div>
  <a-modal v-model:open="visible" title="实现分析" :footer="null">
    <p>1. 布局：为了dom简单，使用多个url背景图拼接</p>
    <p>
      2.
      鼠标移入判断：将矩形由对角线分开看，每个三角形区域就是每个方向进入的角度，通过判断进入box的(x,
      y)的角度，就能判断移入的方向
    </p>
    <p>
      3: 使用
      <span class="light">getBoundingClientRect</span>
      获取box的宽高，以
      <span class="light">Math.atan2(rect.height / 2, rect.width / 2);</span>
      为基准角度对4个方向进行判断
    </p>
  </a-modal>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const direction = ref<"left" | "right" | "top" | "bottom" | "base">("base");
const visible = ref<boolean>(false);

const handleClick = () => {
  visible.value = true;
};

const handleMouseEnter = (e: MouseEvent) => {
  console.info(e);
  const box = document.querySelector(".box");
  if (!box) return;
  const rect = box.getBoundingClientRect();
  const baseDeg = Math.atan2(rect.height / 2, rect.width / 2); // 基准度数，以 Π（3.14） 计算@width
  const x = e.offsetX - rect.width / 2;
  const y = rect.height / 2 - e.offsetY; // 坐标轴方向和Y值方向相反
  const realDeg = Math.atan2(y, x);
  //以下注释以baseDeg = Π/4 为例
  if (realDeg < baseDeg && realDeg >= -baseDeg) {
    // -Π/4 <= d < Π/4
    direction.value = "right";
  } else if (realDeg >= baseDeg && realDeg < Math.PI - baseDeg) {
    // Π/4 <= d < 3Π/4
    direction.value = "top";
  } else if (realDeg >= Math.PI - baseDeg || realDeg < -(Math.PI - baseDeg)) {
    // 3Π/4 <= Π || -Π <= d < -3Π/4
    direction.value = "left";
  } else {
    direction.value = "bottom";
  }
};
const handleMouseLeave = () => {
  direction.value = "base";
};
</script>
<style scoped lang="less">
@width: calc(100% / 3);
// @width: 33.35%;
.box-container {
  width: 100%;
  height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  // display: fl;
}
.box {
  padding: 0;
  position: relative;
  border: 0;
  width: @width;
  height: @width;
  overflow: hidden;
  // position: relative;
  box-sizing: border-box;
  .bg {
    // z-index: -1;
    width: calc(100vw - 200px);
    left: -100%;
    top: -100%;
    height: 100vh;
    transition: 0.5s all;
    background: url("~@/assets/images/MouseMoveDirection/bg.jpeg") no-repeat
        left top/ @width @width,
      url("~@/assets/images/MouseMoveDirection/bg1.jpg") no-repeat center top/
        @width @width,
      url("~@/assets/images/MouseMoveDirection/bg.jpeg") no-repeat right top/
        @width @width,
      url("~@/assets/images/MouseMoveDirection/bg2.jpg") no-repeat left center/
        @width @width,
      url("~@/assets/images/MouseMoveDirection/bg.jpeg") no-repeat center
        center/ @width @width,
      url("~@/assets/images/MouseMoveDirection/bg3.jpg") no-repeat right center/
        @width @width,
      url("~@/assets/images/MouseMoveDirection/bg.jpeg") no-repeat left bottom/
        @width @width,
      url("~@/assets/images/MouseMoveDirection/bg4.jpg") no-repeat center
        bottom/ @width @width,
      url("~@/assets/images/MouseMoveDirection/bg.jpeg") no-repeat right bottom/
        @width @width;
    // background-image: ,
    //   url("~@/assets/images/MouseMoveDirection/bg1.jpg"),
    //   url("~@/assets/images/MouseMoveDirection/bg4.jpg");
    // background-repeat: no-repeat, no-repeat, repeat-y;
    // background-position: left top, center top, right t;
    position: absolute;
  }
}
.top .bg {
  top: 0;
}
.left .bg {
  left: 0;
}
.right .bg {
  // left: calc(0 - @width * 2);
  left: -200%;
}
.bottom .bg {
  top: -200%;
}
.light {
  color: var(--light-color);
  white-space: nowrap;
}
</style>

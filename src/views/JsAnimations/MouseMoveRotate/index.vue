<template>
  <div class="card-container">
    <div
      class="card-wrp"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
    >
      <img :src="card" alt="" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onBeforeMount } from "vue";

const xRange = Object.freeze([-10, 10]);
const yRange = Object.freeze([-10, 10]);

const getRotate = (range: readonly number[], value: number, max: number) =>
  (value / max) * (range[1] - range[0]) + range[0];

const rx = ref<string>("0deg");
const ry = ref<string>("0deg");
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
</style>

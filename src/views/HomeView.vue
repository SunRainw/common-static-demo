<script setup lang="ts"></script>

<template>
  <div class="home-container">
    <div class="text">
      <h1>动效demo & 常见功能</h1>
      <p>效果展示、实现分析、实时更新。</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url("~@/assets/images/home-bg.svg") no-repeat center/cover;
  h1 {
    font-size: 76px;
    font-weight: bolder;
    letter-spacing: -1.5px;
  }
  p {
    font-size: 22px;
    margin: 24px auto 40px;
    color: rgba(60, 60, 60, 0.7);
  }
}
</style>

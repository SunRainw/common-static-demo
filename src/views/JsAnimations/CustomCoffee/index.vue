<template>
  <div class="custom-coffee-container">
    <div class="left-wrp">
      <div class="box">
        <div
          class="card"
          :key="item"
          v-for="item in COFFEE_TYPES"
          @click="handleClick(item)"
        >
          {{ item }}
        </div>
      </div>
      <div class="cup-wrap">
        <div
          class="cup"
          :class="selected.toLocaleLowerCase()?.split(' ').join('-')"
        >
          <div class="cup-body">
            <div v-for="item in COFFEE_MATERIALS" :class="item" :key="item">
              {{ item.split("-").join(" ") }}
            </div>
          </div>
        </div>
        <div class="name">{{ selected }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { COFFEE_TYPES, COFFEE_MATERIALS } from "@/constants/coffee";
import { ref } from "vue";
const selected = ref("Black");
const handleClick = (text: string) => {
  selected.value = text;
};
</script>
<style lang="less" scoped>
@n: 36;
@iDeg: 360deg / @n;
.custom-coffee-container {
  height: 100%;
  background: #cebca6;
  .left-wrp {
    position: relative;
    // padding-top: 200px;
    height: 100%;
    width: 50%;
    min-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .name {
    height: fit-content;
    width: fit-content;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 7%;
    margin: auto;
    display: flex;
    color: rgb(255, 255, 255);
    text-align: center;
    font-size: 20px;
    text-shadow: 0 0 3px rgba(255, 255, 255, 0.5), 0 0px 1px rgba(0, 0, 0, 0.7);
  }
  .box {
    width: 200px;
    background: none;
    height: fit-content;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    margin: auto;
    bottom: 0;
    translate: 250px 12px;
    transform-origin: -157px 107%;
    display: flex;
    flex-direction: column;
    text-align: left;
    rotate: -90deg;
    &:hover * {
      animation-play-state: paused;
    }
  }

  .cup-wrap {
    margin: 0 auto;
    width: 300px;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #9b8c83;
    background: repeating-linear-gradient(
        45deg,
        #9c7154,
        #ffdfca 8px,
        #fff0 8px,
        #fff0 25px
      ),
      repeating-linear-gradient(
        -45deg,
        #7a5943,
        #ffcaa6 8px,
        #fff0 8px,
        #fff0 25px
      );
    background-color: #533723;
    box-shadow: 0 0 1px 1px #7a665a, 0 0 4px 2px #9b8c83,
      inset 0 -630px 20px -500px #c59473, inset 0 -680px 40px -500px #9c7154,
      inset 0 -700px 0 -500px #775843;

    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  @keyframes rotation {
    to {
      transform: rotate(360deg);
    }
  }
  .card {
    --_speed: 4;
    transition: all 0.1s ease-in-out;
    cursor: pointer;
    padding: 4px 12px 1px 22px;
    border-radius: 4px;
    background-color: #d5c2b0;
    color: #826f5c;
    position: absolute;
    animation: rotation calc(var(--_speed) * 36s) linear infinite;
    transform-origin: -145px 50%;

    each(range(@n), {
      &:nth-child(@{index}) {
        animation-delay: calc(var(--_speed) * @index * -1s);
      }
    });
    &:hover {
      background: rgba(255, 255, 255, 1);
      cursor: pointer;
      font-size: 18px;
      box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.2),
        0 0 3px 2px rgba(255, 255, 255, 0.1), 0 0 3px 0 rgba(0, 0, 0, 0.1);
      color: #462814be;
    }
  }
  .cup {
    width: 160px;
    height: 162px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 20px;
      background: linear-gradient(
        63deg,
        rgba(253, 253, 253, 0.7) 9%,
        rgba(238, 238, 238, 0.7) 100%
      );
      box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.05),
        inset 0 0 1px 2px rgba(0, 0, 0, 0.05);
      z-index: 1;
      border-radius: 50%;
      top: -10px;
    }
  }
  .cup-body {
    height: 100%;
    background: rgba(247, 247, 247, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: end;
    clip-path: path(
      "m 0 0 q 4.59 145.8 34.425 155.52 c 29.835 8.1 68.85 8.1 96.39 0 q 29.835 -9.72 29.835 -155.52 C 143 11 16 13 0 0 Z"
    );
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1000;
      box-shadow: inset -18px 0px 4px -10px rgba(255, 255, 255, 0.7),
        inset 42px -22px 12px -10px rgba(0, 0, 0, 0.03),
        inset 0 -22px 12px -10px rgba(0, 0, 0, 0.2),
        inset 20px 0 10px -10px rgba(0, 0, 0, 0.2);
    }
    &::after {
      content: "";
      background: #fff;
      width: 0%;
      height: 0%;
      scale: 1.15 0.7;
      transform-origin: 0% 0%;
      z-index: 1;
      position: absolute;
      top: 0;
    }
    .milk-foam,
    .cream,
    .steamed-milk,
    .milk,
    .chocolate,
    .sugar,
    .whiskey,
    .water,
    .gelato,
    .espresso,
    .coffee,
    .caramel {
      width: 100%;
      height: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 50% / 20%;
      font-size: 12px;
      transition: all 1s ease-in-out;
      opacity: 0.94;
      position: relative;
      margin-top: 0;
      padding-top: 0;
      color: rgba(0, 0, 0, 0);
      margin: 0 auto;
      &::before {
        content: "";
        display: block;
        width: 100%;
        height: 26px;
        border-radius: 50%;
        position: absolute;
        top: -10%;
        transition: all 1s ease-in-out;
        opacity: 0.1;
        background: white;
        z-index: inherit;
      }
    }
    .milk-foam {
      background: #fff;
      z-index: 12;
    }
    .cream {
      background: #fffbe7;
      z-index: 11;
    }
    .steamed-milk {
      background: #fffcf8;
      z-index: 10;
    }
    .milk {
      background: #f8f2e8;
      z-index: 9;
    }
    .chocolate {
      background: #47260a;
      z-index: 8;
    }
    .sugar {
      background: #ffffff;
      z-index: 7;
    }
    .whiskey {
      background: rgba(207, 129, 39, 0.8);
      color: #fff;
      z-index: 6;
    }
    .water {
      background: #e5f7ff;
      z-index: 5;
    }
    .gelato {
      background: #fcf9ea;
      z-index: 4;
    }
    .espresso {
      background: #462814;
      z-index: 3;
    }
    .caramel {
      background-color: #937e3d;
      z-index: 13;
    }
  }
  .black {
    .coffee {
      height: 90%;
      border-radius: 50% / 10%;
      padding-top: 0px;
      color: rgba(255, 255, 255, 1);
      &::before {
        opacity: 0.1;
        background: #fff;
        top: 0%;
      }
    }
  }
  .latte {
    .espresso {
      color: rgba(255, 255, 255, 1);
      height: 30%;
      padding-top: 12px;
      margin-top: -20px;
    }
    .steamed-milk {
      color: rgba(0, 0, 0, 1);
      height: 60%;
      margin-top: -20px;
      padding-top: 12px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
    }
    .milk-foam {
      color: rgba(0, 0, 0, 1);
      height: 24%;
      padding-top: 22px;
      border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      &::before {
        background: #faf8f5;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
      }
    }
  }
  .flat-white {
    .espresso {
      color: rgba(255, 255, 255, 1);
      height: 40%;
      margin-top: -21px;
      padding-top: 20px;
      &::before {
        background: none;
      }
    }
    .steamed-milk {
      color: rgba(0, 0, 0, 1);
      height: 40%;
      margin-top: -20px;
      padding-top: 20px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      &::before {
        background: #faf8f5;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
      }
    }
  }
  .cappuccino {
    .espresso {
      color: rgba(255, 255, 255, 1);
      height: 30%;
      margin-top: -20px;
      padding-top: 20px;
      &::before {
        top: -33%;
      }
    }
    .steamed-milk {
      color: rgba(0, 0, 0, 1);
      height: 30%;
      margin-top: -20px;
      padding-top: 20px;
    }
    .milk-foam {
      color: rgba(0, 0, 0, 1);
      height: 40%;
      padding-top: 20px;
      border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      &::before {
        background: #faf8f5;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
      }
    }
  }
  .americano {
    .water {
      color: rgba(0, 0, 0, 1);
      height: 60%;
      padding-top: 20px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      &::before {
        background: #eff9fd;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
        top: 0;
      }
    }
    .espresso {
      color: rgba(255, 255, 255, 1);
      height: 30%;
      margin-top: -20px;
      padding-top: 20px;
    }
  }
  .cup.espresso {
    .espresso {
      color: rgba(255, 255, 255, 1);
      height: 30%;
      margin-top: -20px;
      padding-top: 20px;
      &::before {
        background: #9e4a12;
        opacity: 0.4;
      }
    }
  }
  .doppio {
    .espresso {
      color: rgba(255, 255, 255, 1);
      height: 40%;
      padding-top: 10px;
      &::before {
        background: #9e4a12;
        opacity: 0.4;
      }
    }
  }
  .cortado {
    .steamed-milk {
      color: rgba(0, 0, 0, 1);
      height: 30%;
      margin-top: -20px;
      padding-top: 20px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      &::before {
        background: #faf8f5;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
      }
    }
    .espresso {
      color: rgba(255, 255, 255, 1);
      height: 30%;
      margin-top: -20px;
      padding-top: 20px;
    }
  }
  .macchiato {
    .milk-foam {
      color: rgba(0, 0, 0, 1);
      height: 30%;
      margin-top: -20px;
      padding-top: 20px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      &::before {
        background: #faf8f5;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
      }
    }
    .espresso {
      color: rgba(255, 255, 255, 1);
      height: 30%;
      margin-top: -20px;
      padding-top: 20px;
    }
  }
  .mocha {
    .cream {
      color: rgba(0, 0, 0, 1);
      height: 20%;
      padding-top: 20px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
      &::before {
        background: #fcf9ea;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
      }
    }
    .steamed-milk {
      color: rgba(0, 0, 0, 1);
      height: 40%;
      margin-top: -18px;
      padding-top: 20px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      border-bottom: 1px dashed rgba(75, 75, 75, 0.3);
      // &::before {
      //   background: #faf8f5;
      //   border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
      //   opacity: 1;
      // }
    }
    .chocolate {
      color: rgba(255, 255, 255, 1);
      height: 25%;
      margin-top: -20px;
      padding-top: 20px;
      border-bottom: 1px dashed rgba(255, 255, 255, 0.5);
    }
    .espresso {
      color: rgba(255, 255, 255, 1);
      height: 40%;
      margin-top: -21px;
      padding-top: 20px;
      &::before {
        background: none;
      }
    }
  }
  .affogato {
    .gelato {
      opacity: 1;
      color: rgba(0, 0, 0, 1);
      height: 30%;
      padding-top: 10px;
      width: 60%;
      border-radius: 100% 100% 50% 50%;
      border: 1px dashed rgba(75, 75, 75, 0.5);
      border-bottom: none;
    }
    .espresso {
      margin-top: -16px;
      color: rgba(255, 255, 255, 1);
      height: 30%;
      padding-top: 10px;
      &::before {
        background: #9e4a12;
        opacity: 0.4;
      }
    }
  }
  .con-panna {
    .cream {
      color: rgba(0, 0, 0, 1);
      height: 24%;
      padding-top: 20px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
      &::before {
        background: #fcf9ea;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
      }
    }
    .espresso {
      margin-top: -16px;
      color: rgba(255, 255, 255, 1);
      height: 40%;
      padding-top: 10px;
      &::before {
        opacity: 0;
      }
    }
  }
  .cafe-au-lait {
    .steamed-milk {
      color: rgba(0, 0, 0, 1);
      height: 50%;
      padding-top: 10px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      &::before {
        background: #faf8f5;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
      }
    }
    .coffee {
      margin-top: -16px;
      color: rgba(255, 255, 255, 1);
      height: 50%;
      padding-top: 10px;
    }
  }
  .irish {
    .cream {
      color: rgba(0, 0, 0, 1);
      height: 24%;
      padding-top: 20px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      &::before {
        background: #fcf9ea;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
      }
    }
    .sugar {
      color: rgba(0, 0, 0, 1);
      height: 22%;
      margin-top: -18px;
      padding-top: 20px;
      &::before {
        background: #fcf9ea;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
      }
    }
    .whiskey {
      color: rgba(255, 255, 255, 1);
      height: 30%;
      margin-top: -18px;
      padding-top: 10px;
    }
    .coffee {
      margin-top: -18px;
      color: rgba(255, 255, 255, 1);
      height: 40%;
      padding-top: 10px;
      &::before {
        opacity: 0;
      }
    }
  }
  .espresso-machiatto {
    .milk-foam {
      color: rgba(0, 0, 0, 1);
      height: 30%;
      margin-top: -20px;
      padding-top: 20px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      &::before {
        background: #faf8f5;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
      }
    }
    .espresso {
      margin-top: -16px;
      color: rgba(255, 255, 255, 1);
      height: 40%;
      padding-top: 10px;
      &::before {
        opacity: 0;
      }
    }
  }
  .caramel-macchiato {
    .caramel {
      color: rgba(255, 255, 255, 1);
      height: 20%;
      // margin-top: -20px;
      padding-top: 20px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
      &::before {
        background: #937e3d;
        border-bottom: 1px dashed rgba(75, 75, 75, 0.5);
        opacity: 1;
      }
    }
    .milk-foam {
      color: rgba(0, 0, 0, 1);
      height: 30%;
      margin-top: -20px;
      padding-top: 20px;
      border-top: 1px dashed rgba(75, 75, 75, 0.3);
    }
    .espresso {
      margin-top: -16px;
      color: rgba(255, 255, 255, 1);
      height: 30%;
      padding-top: 10px;
      &::before {
        opacity: 0;
      }
    }
  }
  .layer {
    text-align: center;
    border-radius: 80px/10px;
    position: relative;
    height: 40px;
    &:nth-child(n + 2) {
      margin-bottom: -20px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 20px;
      border-radius: 50%;
      background: inherit;
      left: 0;
      /* top: 0; */
    }
  }
  .coffee {
    background-color: rgba(75, 49, 31, 0.8);
  }
  .water {
    background: rgba(48, 186, 246, 0.8);
  }
}
</style>

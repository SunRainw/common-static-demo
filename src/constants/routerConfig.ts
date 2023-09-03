import type { RouteRecordRaw } from "vue-router";

export const routerConfig: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
      icon: "HomeOutlined",
    },
    component: () => import("@/views/HomeView.vue"),
  },
  {
    name: "css",
    path: "/css",
    meta: {
      title: "常见CSS效果",
      icon: "HighlightOutlined"
    },
    children: [
      {
        path: "/css/fiveRing",
        name: "fiveRing",
        component: () => import("@/views/CssExamples/FiveRing/index.vue"),
        meta: {
          title: "奥运五环"
        }
      },
    ],
  },
  {
    name: "jsAnimation",
    path: "/jsAnimation",
    meta: {
      title: "Js动画",
      icon: "HighlightOutlined"
    },
    children: [
      {
        path: "/jsAnimation/mouseMoveDirection",
        name: "mouseMoveDirection",
        component: () => import("@/views/JsAnimations/MouseMoveDirection/index.vue"),
        meta: {
          title: "鼠标移入方向动画"
        }
      },
      {
        path: "/jsAnimation/mouseMoveRotate",
        name: "mouseMoveRotate",
        component: () => import("@/views/JsAnimations/MouseMoveRotate/index.vue"),
        meta: {
          title: "卡片跟随鼠标3D旋转"
        }
      },
    ],
  },
];

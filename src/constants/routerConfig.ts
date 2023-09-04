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
    redirect: "/css/fiveRing",
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
    redirect: "/jsAnimation/mouseMoveDirection",
    meta: {
      title: "Js动画",
      icon: "SlackOutlined"
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
  {
    name: "commonFunctions",
    path: "/commonFuncs",
    redirect: "/commonFuncs/fragmentUpload",
    meta: {
      title: "前端常见功能",
      icon: "RadarChartOutlined"
    },
    children: [
      {
        path: "/commonFuncs/fragmentUpload",
        name: "fragmentUpload",
        component: () => import("@/views/CommonFunctions/FragmentUpload/index.vue"),
        meta: {
          title: "分片上传"
        }
      },
    ]

  }
];

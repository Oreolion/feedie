import { createRouter, createWebHistory } from "vue-router";

import ShareFeedBack from "@/views/share-feedback.vue";
import MyFeedBack from "@/views/my-feedback.vue";
import TeamFeedBack from "@/views/team-feedback.vue";
import Login from "@/views/login.vue";
import Signup from "@/views/signup.vue";
import Dashboard from "@/layouts/dashboard.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/share-feedback",
      component: Dashboard,
      children: [
        {
          path: "/share-feedback",
          name: "share-feedback",
          component: ShareFeedBack,
          meta: { requiresAuth: true },
        },
        {
          path: "/share-feedback/:id",
          name: "user-feedback",
          component: () => import("@/views/user-feedback.vue"),
          meta: { requiresAuth: true },
        },
        {
          path: "/my-feedback",
          name: "my-feedback",
          component: MyFeedBack,
          meta: { requiresAuth: true },
        },
        {
          path: "/team-feedback",
          name: "team-feedback",
          component: TeamFeedBack,
          meta: { requiresAuth: true },
        },
      ],
    },
    { path: "/login", name: "login-page", component: Login },
    { path: "/signup", name: "signup-page", component: Signup },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
  ],
});

// const isLoggedIn = () =>  !!localStorage.getItem("isLoggedIn");

// global navigation guard
router.beforeEach(async (to, from, next) => {
  const isLoggedIn = !!localStorage.getItem("isLoggedIn");

  if (to.matched.some((item) => item.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else if (isLoggedIn && to.name === "login-page") {
    next({ path: "/" });
  } else {
    next();
  }
});

export default router;

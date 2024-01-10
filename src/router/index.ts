import { createRouter, createWebHistory } from "vue-router";
import ShareFeedBack from "@/views/share-feedback.vue";
import MyFeedBack from "@/views/my-feedback.vue";
import TeamFeedBack from "@/views/team-feedback.vue";
import Login from "@/views/login.vue";
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
        },
        {
          path: "/share-feedback/:id",
          name: "user-feedback",
          component: () => import("@/views/user-feedback.vue"),
        },
        {
          path: "/my-feedback",
          name: "my-feedback",
          component: MyFeedBack,
        },
        {
          path: "/team-feedback",
          name: "team-feedback",
          component: TeamFeedBack,
        },
      ],
    },
    { path: "/login", name: "login-page", component: Login },
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

export default router;

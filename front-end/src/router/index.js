import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import CityView from "../views/CityView.vue";
// import LoginView from "../views/LoginView.vue";
// import SignInView from "../views/SignInView.vue";

const routes = [
  {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
  },
  {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
  },
  {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/Signin.vue')
  },
  {
      path: '/course/:id',
      name: 'course',
      component: () => import('../views/Course.vue')
  },
  {
      path: '/course/:id/submissions',
      name: 'submission',
      component: () => import('../views/Submission.vue')
  },
  {
      path: '/course/:id/submissions/:id',
      name: 'submission-detile',
      component: () => import('../views/SubmissionDetile.vue')
  },
  {
      path: '/course/:id/discussion',
      name: 'discussion',
      component: () => import('../views/ForumDiscussion.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: HomeView,
//       meta: {
//         title: "Home",
//       },
//     },
//     {
//       path: "/weather/:state/:city",
//       name: "cityView",
//       component: CityView,
//       meta: {
//         title: "Weather",
//       },
//     },
//     {
//       path: "/signIn",
//       name: "signIn",
//       component: SignInView,
//       meta: {
//         title: "Register",
//       },
//     },
//     {
//       path: "/logIn",
//       name: "logIn",
//       component: LoginView,
//       meta: {
//         title: "Masuk",
//       },
//     },
//   ],
// });

// router.beforeEach((to, from, next) => {
//   document.title = `${
//     to.params.state
//       ? `${to.params.city}, ${to.params.state}`
//       : to.meta.title
//   } | The Local Weather`;
//   next();
// });

export default router;

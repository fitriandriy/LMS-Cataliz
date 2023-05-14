import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
  },
  {
      path: '/create-course',
      name: 'create-course',
      component: () => import('../views/CreateCourse.vue')
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
      path: '/course/:id/edit',
      name: 'edit-course',
      component: () => import('../views/EditCourse.vue')
  },
  {
      path: '/course/:id/section/:sectionId/edit',
      name: 'edit-section',
      component: () => import('../views/EditSection.vue')
  },
  {
    //   path: '/course/:id/section/:sectionId/create-lesson',
      path: '/course/:id/create-lesson',
      name: 'create-lesson',
      component: () => import('../views/CreateLesson.vue')
  },
  {
    //   path: '/course/:id/section/:sectionId/create-lesson',
      path: '/course/:id/create-task',
      name: 'create-task',
      component: () => import('../views/CreateTask.vue')
  },
  {
      path: '/course/:id/create-section',
      name: 'create-section',
      component: () => import('../views/CreateSection.vue')
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
  {
      path: '/course/:id/discussion/:id',
      name: 'discussion-detile',
      component: () => import('../views/DetileDiscussion.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = JSON.parse(localStorage.getItem("authenticated"));
    if (to.name !== "login" && to.name !== "signin" && !isAuthenticated) next({name: "login"});
    if (to.name === "login" && isAuthenticated) next({name: "home"});
    if (to.name === "signin" && isAuthenticated) next({name: "home"});
    else next();
})

export default router;

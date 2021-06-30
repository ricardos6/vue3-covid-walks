import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/home/Home.vue';
import Login from '../views/login/Login.vue';
import FriendInfo from '../views/friendInfo/FriendInfo.vue';
import NewWalk from '../views/newWalk/NewWalk.vue';
import WalkInfo from '../views/walkInfo/WalkInfo.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/friend/:id",
    name: "FriendInfo",
    beforeEnter: checkAdminRights,
    component: FriendInfo
  },
  {
    path: "/new-walk",
    name: "NewWalk",
    component: NewWalk
  },
  {
    path: "/walk/:id",
    name: "WalkInfo",
    beforeEnter: checkAdminRights,
    component: WalkInfo
  },
  {
    path: "/not-allowed",
    name: "NotAllowed",
    component: {
      template: "<div>No tienes permisos para ver esta ruta</div> <a href=" / ">Volver a home</a>"
    }
  }
];

function checkAdminRights(to, from, next) {
  let user = JSON.parse(localStorage.getItem('USER_INFO'));
  // check if the user is admin
  if (user.rol == 'admin') {
    next();
  } else {
    return next('/not-allowed');
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('USER_INFO');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  if (!authRequired && loggedIn) {
    return next('/');
  }

  next();
})

export default router;
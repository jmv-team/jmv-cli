import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

//views page
const Index = resolve => require(['../views/Index'], resolve){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
const routes = [
  {
    path: '/index',
    name: 'index',
    component: Index
  },
  {path: '*', redirect: '/index'}
]

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default new Router({
  routes: routes
})

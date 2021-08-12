const c1 = () => import(/* webpackChunkName: "page--src-templates-product-vue" */ "C:\\Users\\User\\Desktop\\my_dev\\gridsome\\src\\templates\\Product.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-shirts-vue" */ "C:\\Users\\User\\Desktop\\my_dev\\gridsome\\src\\pages\\Shirts.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-pants-vue" */ "C:\\Users\\User\\Desktop\\my_dev\\gridsome\\src\\pages\\Pants.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-accessories-vue" */ "C:\\Users\\User\\Desktop\\my_dev\\gridsome\\src\\pages\\Accessories.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\User\\Desktop\\my_dev\\gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\User\\Desktop\\my_dev\\gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/product/ckdu44mn40gxh010405uwgbtw/",
    component: c1
  },
  {
    path: "/product/ckdu48unc0gzq0158mbzvyzg3/",
    component: c1
  },
  {
    path: "/product/ckdu49mfc0h070102jgprxnj0/",
    component: c1
  },
  {
    path: "/product/ckdu4a79c0h0g0158pqypj0dp/",
    component: c1
  },
  {
    path: "/product/ckdu4awq00h140104ijzi92kv/",
    component: c1
  },
  {
    path: "/product/ckdu4bmyg0h1f0102jk0mwn2g/",
    component: c1
  },
  {
    path: "/product/ckdu4ch1s0h1s01580ksoy6m5/",
    component: c1
  },
  {
    path: "/product/cks8p0ze0282k0b85wh55yyz5/",
    component: c1
  },
  {
    path: "/shirts/",
    component: c2
  },
  {
    path: "/pants/",
    component: c3
  },
  {
    path: "/accessories/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home/', alias: "home", name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'categorias/', name: 'categories', component: () => import('src/pages/CategoriasPage.vue') },
      { path: 'sobre/', name: 'about', component: () => import('src/pages/AboutPage.vue') },
      { path: 'favoritos/', name: 'favorites', component: () => import('src/pages/FavoritesPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
